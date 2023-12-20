import styled from "styled-components";
import Logo from "../assets/logo.svg";
import Sparkle from "../assets/sparkle.svg";
import Example from "../assets/example.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function StartPage() {
    const navigate = useNavigate();
    useEffect(() => {
        // 세션 스토리지를 체크하여 페이지가 이미 새로고침 되었는지 확인
        const isReloaded = localStorage.getItem("isReloaded");

        if (!isReloaded) {
            // 'isReloaded' 값이 없으면, 페이지를 새로고침하고, 값을 설정
            localStorage.setItem("isReloaded", "true");
            window.location.reload();
        }
    }, []);

    return (
        <Wrap onClick={() => navigate("/frame")}>
            <Layout>
                <img src={Logo} alt="" style={{ width: "217px" }} />
                <H1>
                    <strong>위니브</strong>네컷
                </H1>
                <Message>
                    <img src={Sparkle} alt="" style={{ width: "26px" }} />
                    <p>
                        위니브와 함께하는 <strong>따뜻한 순간</strong>을 남겨보세요!
                    </p>
                    <img src={Sparkle} alt="" style={{ width: "26px" }} />
                </Message>
                <ExampleBox>
                    <img src={Example} alt="" style={{ width: "475px" }} />
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
    height: calc(100vh - 168px);
    padding: 107px 0 88px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const H1 = styled.h1`
    color: #9d0c0c;
    font-size: 100px;
    font-weight: 300;
    margin: 41px 0 19px;
    strong {
        font-weight: 700;
    }
`;

const Message = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
    margin-bottom: 56px;

    p {
        position: relative;
        color: #b07d4f;
        font-size: 30px;
        font-weight: 500;

        strong {
            font-weight: 700;
        }

        &::before {
            content: "";
            display: block;
            z-index: -2;
            width: 545px;
            height: 15px;
            background: rgba(254, 241, 83, 0.4);
            position: absolute;
            bottom: -4px;
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
        width: 19px;
        height: 42px;
        background: #9d0c0c;
        transform: rotate(45deg) translateX(-50%);
        position: absolute;
        top: -17px;
        left: 50%;
    }
`;

const Guide = styled.div`
    width: 100vw;
    height: 168px;
    padding: 37px 0 77px;
    background: #9d0c0c;
    color: #e9e4d8;
    text-align: center;
    font-size: 45px;
    font-weight: 700;
`;
