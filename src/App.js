import React from 'react'
import { connect } from 'react-redux'
import './signin.css'
class App extends React.Component {
    render(){


        return (
            <div>
                <div  className = 'header1'>

                    <div className ='start'>
                    <a href="/">首頁</a>
                    </div>

                    <div className ='end'>
                        <a href='/'>關於我們</a>  
                        <a href='/'>聯絡方式</a>   
                        <a href='/'>登入 </a>
                    </div>
                </div>
            </div>

        )
    }
}


export default App;
