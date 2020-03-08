import React from 'react';


export default class LifeCycle extends React.Component{
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render(){
        return <div>Unmount</div>
    }
}