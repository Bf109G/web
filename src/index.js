import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './index.less'
import './index.scss'

ReactDOM.render(
    <div className="content">Hello
        <span className="content-sass">China，</span>
        <span className="content-less">China！</span>
    </div>,
    document.getElementById('root')
)