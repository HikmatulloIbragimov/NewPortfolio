import styled from "styled-components";

export const Nav = styled.div`
    width:100%;
    color: white;
    padding-top:30px;
    position: absolute;
    top: 0;
    nav{
        width: 80%;
        height: 100%;
        margin:auto;
        display: flex;
        justify-content: space-between;
        ul{
            display: flex;
            gap: 20px;
            li{
                font-size: 20px;
                position: relative;
                a{
                    text-decoration: none;
                    color: #CED7E5;
                    transition: .3s;
                    span{
                        left: 0;
                        bottom: 0;
                        background-color: #00A3E8;
                        width: 100%;
                        height: 1.5px;
                        transform: scaleX(0);
                        transition: transform .3s;
                        transition-delay:.2s;
                        position: absolute;
                        display: block;
                        transform-origin:left;
                    }
                }
                
            }
            
            
        }
    }
    .active{
        color: #00A3E8;
        transition: .2s;

        .span{
            transform: scaleX(1);
            transform-origin: left; 
        }
    }
`