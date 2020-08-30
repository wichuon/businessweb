import React, { Component } from 'react'
import {Button,Jumbotron} from 'reactstrap';
import Slieds from './Slides';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Slieds/>
                <Jumbotron>
                ยินดีต้อนรับเข้าสู่เว็บไซต์  <br/>
                <Button>เข้าสู่ระบบ</Button>
                </Jumbotron>
              
             
            </div>
        )
    }
}
