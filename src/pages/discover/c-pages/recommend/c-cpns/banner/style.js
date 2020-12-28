import styled from 'styled-components'
import downloadBg from '@/assets/img/download.png'
import bannerSrpite from '@/assets/img/banner_sprite.png'

export const TopSwiper = styled.div`
  background: url(${(props) => props.bannerBGI}) center/6000px;
`

export const BannerWrapper = styled.div`
  
  position: relative;
  .left-banner {
    .banner-img-wrapper {
      img {
        display: block;
        width: 730px;
        height: 100%;
      }
    }
  }
  .download {
    position: absolute;
    background: url(${downloadBg}) no-repeat;
    right: 0;
    top: 0;
    width: 250px;
    height: 270px;
  }
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${bannerSrpite});
    background-repeat: no-repeat;
    background-color: transparent;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
  }
  .back {
    background-position: 0 -360px;
    left: -50px;
  }
  .go {
    background-position: 0 -508px;
    right: -50px;
  }
`