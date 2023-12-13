import styled from "styled-components";
import Logo from "../assets/logo.svg";
import Sparkle from "../assets/sparkle.svg";
import Example from "../assets/example.svg";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
    const navigate = useNavigate();

    return (
        <Wrap onClick={() => navigate("/frame")}>
            <Layout>
                <img src={Logo} alt="" style={{ width: "434px" }} />
                <H1>
                    <strong>위니브</strong>네컷
                </H1>
                <Message>
                    <img src={Sparkle} alt="" />
                    <p>
                        위니브와 함께하는 <strong>따뜻한 순간</strong>을 남겨보세요!
                    </p>
                    <img src={Sparkle} alt="" />
                </Message>
                <ExampleBox>
                    <img src={Example} alt="" />
                </ExampleBox>
            </Layout>
            <Guide>화면을 터치해 주세요</Guide>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Layout = styled.main`
    height: calc(100vh - 288px);
    padding: 215px 0 177px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const H1 = styled.h1`
    color: #9d0c0c;
    font-size: 200px;
    font-weight: 300;
    margin: 82px 0 37px;
    strong {
        font-weight: 700;
    }
`;

const Message = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    margin-bottom: 159px;

    p {
        position: relative;
        color: #b07d4f;
        font-size: 60px;
        font-weight: 500;

        strong {
            font-weight: 700;
        }

        &::before {
            content: "";
            display: block;
            z-index: -2;
            width: 1090px;
            height: 30px;
            background: rgba(254, 241, 83, 0.4);
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;

const ExampleBox = styled.div`
    position: relative;

    &::before {
        content: "";
        display: block;
        width: 38px;
        height: 83px;
        background: #9d0c0c;
        transform: rotate(45deg) translateX(-50%);
        position: absolute;
        top: -33px;
        left: 50%;
    }
`;

const Guide = styled.div`
    width: 100vw;
    height: 288px;
    background: #9d0c0c;
    color: #e9e4d8;
    text-align: center;
    font-size: 110px;
    font-weight: 700;
    line-height: 288px;
`;
