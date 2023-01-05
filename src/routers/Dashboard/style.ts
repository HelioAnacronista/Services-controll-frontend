import styled from 'styled-components'

const media = {
  desktop: `@media(min-width: 1280px)`,
  mobile: `@media(max-width: 375px)`,
}

export const ContentTop = styled.div`
  display: flex;

  ${media.mobile} {
    display: block;
  }
`

export const ContentList = styled.div`
  .list-title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  table {
    width: 100%;
    text-align: center;
    background-color: white;
    padding: 1rem;
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: 0rem 2rem 10rem rgb(112 115 146 / 34%);
    transition: all 10ms ease;
  }

  td {
    border-bottom: 1px solid #848bc82e;
    vertical-align: middle;
    width: auto;
  }

  ${media.mobile} {
    table {
      text-align: center;
      background-color: white;
      padding: 1rem;
      border-radius: 1rem;
      margin-top: 1rem;
      box-shadow: 0rem 2rem 10rem rgb(112 115 146 / 34%);
      transition: all 10ms ease;

      width: 90%;
    }

    tbody {
      overflow-x: auto;
    }
  }
`

export const Container = styled.div`
  display: flex;

  //(MOBILE)
  ${media.mobile} {
    display: block;

    .card-style {
      background-color: white;
      padding: 1rem;
      border-radius: 2rem;
      margin-top: 1.3rem;
      box-shadow: 0 2rem 3rem #70739257;
      transition: all 300ms ease;
    }

    .card-infos {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .card-datas {
        h3 {
          margin: 1rem 0 0.6rem;
          font-size: 1rem;
        }

        h1 {
          font-weight: 800;
          font-size: 1.8rem;
        }
      }
    }
  }

  //(desktop)
  ${media.desktop} {
    display: flex;

    .card-style {
      background-color: white;
      padding: 10px;
      border-radius: 2rem;
      margin-top: 1.3rem;
      box-shadow: 0 2rem 3rem #70739257;
      transition: all 300ms ease;
    }

    .card-infos {
      display: flex;
      width: 365px;
      .card-datas {
        h3 {
          margin: 1rem 0 0.6rem;
          font-size: 1rem;
        }

        h1 {
          font-weight: 800;
          font-size: 1.8rem;
        }
      }
    }
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
`
