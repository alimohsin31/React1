import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

function DashBoardTable() {

    const [key, setKey] = useState('home');
    const Home=[
        {name:'Mohsin', date: '22 SEP, 2021', amount: '500', paymentMethod:'cash',paymentId: 'ORDERID1646093867'},
        {name:'Ahsin',date:'22 SEP, 2021',amount:'450', paymentMethod:'PAYPAL',paymentId: 'ORDERID1646093867'},
        {name:'Nimra',date:'22 SEP, 2021',amount:'400', paymentMethod:'CHEQUE',paymentId: 'ORDERID1646093867'},
        {name:'Siddique',date:'22 SEP, 2021',amount:'1000', paymentMethod:'UPI',paymentId: 'ORDERID1646093867'},
        {name:'Siddique',date:'22 SEP, 2021',amount:'1000', paymentMethod:'UPI',paymentId: 'ORDERID1646093867'},
        {name:'Siddique',date:'22 SEP, 2021',amount:'1000', paymentMethod:'UPI',paymentId: 'ORDERID1646093867'},
    ];
    const Profile=[
        {name:'Mohsin', date: '22 SEP, 2021', amount: '500', paymentMethod:'cash',paymentId: 'ORDERID1646093867'},
        {name:'Ahsin',date:'22 SEP, 2021',amount:'450', paymentMethod:'PAYPAL',paymentId: 'ORDERID1646093867'},
        {name:'Nimra',date:'22 SEP, 2021',amount:'400', paymentMethod:'CHEQUE',paymentId: 'ORDERID1646093867'},
        {name:'Siddique',date:'22 SEP, 2021',amount:'1000', paymentMethod:'UPI',paymentId: 'ORDERID1646093867'},
        {name:'Siddique',date:'22 SEP, 2021',amount:'1000', paymentMethod:'UPI',paymentId: 'ORDERID1646093867'},
        {name:'Siddique',date:'22 SEP, 2021',amount:'1000', paymentMethod:'UPI',paymentId: 'ORDERID1646093867'},
    ];
    const Contact=[
        {name:'Mohsin', date: '22 SEP, 2021', amount: '500', paymentMethod:'cash',paymentId: 'ORDERID1646093867'},
        {name:'Ahsin',date:'22 SEP, 2021',amount:'450', paymentMethod:'PAYPAL',paymentId: 'ORDERID1646093867'},
        {name:'Nimra',date:'22 SEP, 2021',amount:'400', paymentMethod:'CHEQUE',paymentId: 'ORDERID1646093867'},
        {name:'Siddique',date:'22 SEP, 2021',amount:'1000', paymentMethod:'UPI',paymentId: 'ORDERID1646093867'},
        {name:'Siddique',date:'22 SEP, 2021',amount:'1000', paymentMethod:'UPI',paymentId: 'ORDERID1646093867'},
        {name:'Siddique',date:'22 SEP, 2021',amount:'1000', paymentMethod:'UPI',paymentId: 'ORDERID1646093867'},
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 4;

    return(
        <>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="border-bottom-0" activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="home" title="Home" style={{color:'#676D74'}} className='py-3'>
                    <Table responsive style={{color:'#B9C0C4'}}>
                        <thead style={{verticalAlign:'middle'}}>
                            <tr className="text-center" style={{background: '#272D34'}}>
                                <th className='py-4 border-bottom-0'>#</th>
                                <th className='text-uppercase border-bottom-0'>giver's name</th>
                                <th className='text-uppercase border-bottom-0'>date</th>
                                <th className='text-uppercase border-bottom-0'>amount</th>
                                <th className='text-uppercase border-bottom-0'>payment method</th>
                                <th className='text-uppercase border-bottom-0'>payment id</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            Home.map((data,i)=>
                               
                                <tr key={i} className="text-center">
                                    <td className='py-3 border-bottom-0'>{i+=1}</td>
                                    <td className='py-3 border-bottom-0'>{data.name}</td>
                                    <td className='py-3 border-bottom-0'>{data.date}</td>
                                    <td className='py-3 border-bottom-0'>$ {data.amount}</td>
                                    <td className='py-3 border-bottom-0'>{data.paymentMethod}</td>
                                    <td className='py-3 border-bottom-0'>{data.paymentId}</td>
                                </tr>
                            )
                        }
                        </tbody>    
                    </Table>

                    <ResponsivePagination
                        current={currentPage}
                        total={totalPages}
                        onPageChange={setCurrentPage}
                    />

                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <Table responsive style={{color:'#B9C0C4'}}>
                        <thead style={{verticalAlign:'middle'}}>
                            <tr className="text-center" style={{background: '#272D34'}}>
                                <th className='py-4 border-bottom-0'>#</th>
                                <th className='text-uppercase border-bottom-0'>giver's name</th>
                                <th className='text-uppercase border-bottom-0'>date</th>
                                <th className='text-uppercase border-bottom-0'>amount</th>
                                <th className='text-uppercase border-bottom-0'>payment method</th>
                                <th className='text-uppercase border-bottom-0'>payment id</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            Profile.map((data,i)=>
                               
                                <tr key={i} className="text-center">
                                    <td className='py-3 border-bottom-0'>{i+=1}</td>
                                    <td className='py-3 border-bottom-0'>{data.name}</td>
                                    <td className='py-3 border-bottom-0'>{data.date}</td>
                                    <td className='py-3 border-bottom-0'>$ {data.amount}</td>
                                    <td className='py-3 border-bottom-0'>{data.paymentMethod}</td>
                                    <td className='py-3 border-bottom-0'>{data.paymentId}</td>
                                </tr>
                            )
                        }
                        </tbody>    
                    </Table>
                    <ResponsivePagination
                        current={currentPage}
                        total={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <Table responsive style={{color:'#B9C0C4'}}>
                        <thead style={{verticalAlign:'middle'}}>
                            <tr className="text-center" style={{background: '#272D34'}}>
                                <th className='py-4 border-bottom-0'>#</th>
                                <th className='text-uppercase border-bottom-0'>giver's name</th>
                                <th className='text-uppercase border-bottom-0'>date</th>
                                <th className='text-uppercase border-bottom-0'>amount</th>
                                <th className='text-uppercase border-bottom-0'>payment method</th>
                                <th className='text-uppercase border-bottom-0'>payment id</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            Contact.map((data,i)=>
                               
                                <tr key={i} className="text-center">
                                    <td className='py-3 border-bottom-0'>{i+=1}</td>
                                    <td className='py-3 border-bottom-0'>{data.name}</td>
                                    <td className='py-3 border-bottom-0'>{data.date}</td>
                                    <td className='py-3 border-bottom-0'>$ {data.amount}</td>
                                    <td className='py-3 border-bottom-0'>{data.paymentMethod}</td>
                                    <td className='py-3 border-bottom-0'>{data.paymentId}</td>
                                </tr>
                            )
                        }
                        </tbody>    
                    </Table>
                    <ResponsivePagination
                        current={currentPage}
                        total={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </Tab>
            </Tabs>
        </>
    )
}

export default DashBoardTable;