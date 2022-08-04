import React, { Component } from 'react'

export default function(WrapperComponent, myStyle={}){
    return class extends React.Component{
        constructor(props){
            super(props);
        }

        getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          }
          

        render(){
            return (
                <section style={{color: this.getRandomColor()}}>
                    <WrapperComponent myStyle={myStyle} {...this.props}/>
                </section>
            )
        }
    }
}
