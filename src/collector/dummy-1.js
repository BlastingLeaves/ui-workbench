import React from 'react'
import Dummy1 from '../components/dummy-1'
import testImg from '../assets/img/test-img.png'

export default () => <div>
    <Dummy1 />
    <img src={testImg} alt="if you see this it's wrong" />
</div>