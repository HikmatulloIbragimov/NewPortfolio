
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
        justify-content: center;
        align-items: center;
        .cardBar{
            width: 300px;
            background: lightgray;
            border-radius: 30px;
            overflow: hidden;
            position: relative;
            .img{
                width: 100%;
                height: 100%;
                transition: 1s;
                img{
                width: 100%;
                height: 100%;
                object-fit: contain;
                }
            }
            .content{
                width: 300px;
                height: 200px;
                padding: 6px;
                position: absolute;
                backdrop-filter:blur(20px);
                text-align: justify;
                color: black;
                opacity: 0;
                transition: all 1s;
                visibility: hidden;
            }
            &:hover{
                .content{
                    width: 100%;
                    height: 100%;
                    opacity:1 ;
                    visibility: visible;
                    
                }
                .img{
                    transform: scale(1.1);
                }
            }
        }
    }


`