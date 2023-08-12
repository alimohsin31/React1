const express   = require("express");
const mysql     = require("mysql");
const multer    = require('multer');
const cors      = require("cors");
const path      = require("path");
// const upload = multer({ dest: 'public/images' })

// to post data
const bodyParser = require('body-parser')

const app = express()
// app.use(express.json())
app.use(cors())
app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bigleap"
})

// to store images

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        console.warn(file);
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage:storage
});



app.get('/blog', (req, res) => {
    const sql = "select * from blogs order by Id desc limit 3";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.get('/get-blog', (req, res) => {
    const sql = "select * from blogs order by Id desc";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
});

// getting single blog

app.get('/single-blog/:id', (req, response) => {
    const id = req.params.id;
    const sql = 'select * from blogs where id = ?';
    db.query(sql, [id], (err, data) => {
        if(err) return response.json(err);
        return response.json(data[0]);
    })
});

app.post('/contactus', (req, res)=> {
    
    const f_name = req.body.f_name;
    const l_name = req.body.l_name;
    const email = req.body.email;
    const phone = req.body.phone;
    const suject = req.body.suject;
    const message = req.body.message;
  
    const sqlQuery = "INSERT INTO contactus (first_name, last_name, contact_email, contact_number, contact_subject, contact_message) VALUES (?,?,?,?,?,?)"

    db.query(sqlQuery, 
            [f_name,l_name,email,phone,suject,message], (err, result) => {
        if (err) {
            console.log('ERROR',err);
        }
        res.status(200).json(result);
    });

});

app.post('/blog-submit', upload.fields([
    { name:'blogimage1', maxCount:1 },
    { name:'blogimage2', maxCount:1 },
    { name:'blogimage3', maxCount:1 }
]) , (req, res)=> {
    
    const authorName           = req.body.authorName;
    const authorEmail          = req.body.authorEmail;
    const blogheading          = req.body.blogheading;
    const blogPostedby         = req.body.blogPostedby;
    const blogtextFirst        = req.body.blogtextFirst;
    const blogtextSecond       = req.body.blogtextSecond;
    const blogtextThird        = req.body.blogtextThird;
    const blogQuotes           = req.body.blogQuotes;
    // const blog_image_1          = req.body.file.originalname;

    // Access the uploaded files using req.files
  const blogimage = {};
  for (const fieldName in req.files) {
    blogimage[fieldName] = req.files[fieldName][0].filename;
  }

    // const blogimage1          = req.file.path;
    // const blogimage2          = req.file.path;
    // const blogimage3          = req.file.path;
    // const blog_image_2          = req.body.blog_image_2;
    // const blog_image_3          = req.body.blog_image_3;
  
    // console.warn(blogimage1);
    console.warn(req.body);

    // res.send("Image Uploaded");

    const sqlQuery = "INSERT INTO blogs (author_Name, author_Email, blog_heading, blog_Posted_by, blog_text_First, blog_text_Second, blog_text_Third, blog_Quotes,blog_image_1,blog_image_2,blog_image_3) VALUES (?,?,?,?,?,?,?,?,?,?,?)"

    db.query(sqlQuery, 
            [authorName,authorEmail,blogheading,blogPostedby,blogtextFirst,blogtextSecond,blogtextThird,blogQuotes,blogimage.blogimage1,blogimage.blogimage2,blogimage.blogimage3], (err, result) => {
        if (err) {
            console.log('ERROR',err);
        }
        res.status(200).json(result);
    });

});



app.get('/', (re, res) => {
    return res.json("From Backend Side");
})

app.listen(8081, () => {
    console.warn('Listening BackEnd');
})