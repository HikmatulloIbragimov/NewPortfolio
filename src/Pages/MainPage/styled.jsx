
import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    color: white;
    padding: 30px 0;
    .Body{
        width: 80%;
        height: 100%;
        margin:auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        .content{
            width: 50%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            .h1{
                color:#03e9f4;
            }
            .Btns{
                display: flex;
                gap: 30px;
                button{
                    padding: 10px 20px;
                    border-radius: 10px;
                    border: 1px solid transparent;
                    transition: all .3s;
                    &:nth-child(1){
                        background-color: #00A4E7;
                        color:#081B27
                    }
                    &:nth-child(1):hover{
                        box-shadow:0 0 5px #03e9f4,
                                    0 0 25px #03e9f4,
                                    0 0 50px #03e9f4,
                                    0 0 200px #03e9f4;
                        background-color: #03e9f4;
                        color: white;
                    }
                    &:nth-child(2){
                        background-color: rgb(10,10,25);
                        border: 1px solid #00A4E7;
                        color: #00A4E7;
                    }
                    &:nth-child(2):hover{
                        box-shadow:0 0 5px #03e9f4,
                                    0 0 25px #03e9f4,
                                    0 0 50px #03e9f4,
                                    0 0 200px #03e9f4;
                        background-color: #03e9f4;
                        color: white;
                    }
                }
            }
        }
        .Icons{
            position: absolute;
            bottom: 30px;
            display: flex;
            gap: 30px;
            button{
                width: 40px;
                height: 40px;
                border-radius:50%;
                border: 2px solid #00A4E7;
                color: #00A4E7;
                font-size: 15px;
                background-color: rgb(10,10,25);
                transition: all .3s;
                &:nth-child(1):hover{
                        box-shadow:0 0 5px #03e9f4,
                                    0 0 25px #03e9f4,
                                    0 0 50px #03e9f4,
                                    0 0 200px #03e9f4;
                        background-color: #03e9f4;
                        color: white;
                }
                &:nth-child(2):hover{
                        box-shadow:0 0 5px #03e9f4,
                                    0 0 25px #03e9f4,
                                    0 0 50px #03e9f4,
                                    0 0 200px #03e9f4;
                        background-color: #03e9f4;
                        color: white;
                }
                &:nth-child(3):hover{
                        box-shadow:0 0 5px #03e9f4,
                                    0 0 25px #03e9f4,
                                    0 0 50px #03e9f4,
                                    0 0 200px #03e9f4;
                        background-color: #03e9f4;
                        color: white;
                }
            }
            
        }
    }
    @media screen and (max-width: 768px) {
        .Body{
            align-items: center;
            .content{
            width: 100%;
        }
        }
    }

`