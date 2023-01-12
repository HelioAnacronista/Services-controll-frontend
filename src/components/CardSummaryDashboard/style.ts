import styled from "styled-components";

const media = {
  mobile: `@media(min-width: 300px) and (max-width:764px)`,
  tablet: `@media(min-width: 760px) and (max-width: 1024px)`,
  desktop: `@media(min-width: 1280px)`,
};

export const Container = styled.div`
  
  background-color: white;
  width: 360px;
  padding: 10px;
  border-radius: 2rem;
  margin-top: 1.3rem;
  box-shadow: 0 2rem 3rem #70739257;
  transition: all 300ms ease;

  .card-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* card report ]
  all styles*/
  .icons-sharp {
    background-color: #7380ec;
    padding: 0.5rem;
    border-radius: 50%;
    color: white;
    font-size: 2rem;
  }

  .value {
    color: green;
  }

  .times {
    margin-top: 1.3rem;
    display: block;
    color: #7d8da1;
  }

  .container-list {
    margin: 20px;

    h1 {
      font-weight: 700;
      font-size: 30px;
    }
    .line-vertical {
      margin-top: 10px;
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.131);
    }
    .list-title {
      padding-top: 15px;
    }
  }

  //(Tablet)
  ${media.tablet} {
    display: block;
    width: 200px;

    .card-style {
      background-color: white;

      padding: 1rem;
      border-radius: 2rem;
      margin-top: 1.3rem;
      box-shadow: 0 2rem 3rem #70739257;
      transition: all 300ms ease;
    }
    .card-datas {
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        margin-left: 5px;
      }
    }
    .card-center {
      display: block;
    }
  }

  //(MOBILE)
  ${media.mobile} {
    display: block;
    width: 320px;
    .card-style {
      background-color: white;

      padding: 1rem;
      border-radius: 2rem;
      margin-top: 1.3rem;
      box-shadow: 0 2rem 3rem #70739257;
      transition: all 300ms ease;
    }
    .card-datas {
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        margin-left: 5px;
      }
    }
    .card-center {
      display: block;
    }
  }
`;
