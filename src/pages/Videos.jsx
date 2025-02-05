import { React, useState } from 'react';


export default function Videos() {

  return (
    <div className="MusicPage">
      <div className='main-content'>
        <div className="discography">
          <h1 className="pageHeading">Videos</h1>
        </div>

        <div className="mp-content">
          <div className="k-section">
            <div className="inSection musicVideos">
              <p className="pageHead" style={{color:'#4A3C4B', fontWeight:'500'}}>Music Videos</p>
              <div className="content">
                <div className="Vcards">
                    <iframe width="500" height="255" src="https://www.youtube.com/embed/-hIhKvdZBKg?si=LX_mczxQOyzIkB4x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="500" height="255" src="https://www.youtube.com/embed/9iD1Q02eSAE?si=1RNtLObatlJrEbot" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="500" height="255" src="https://www.youtube.com/embed/uIlJHHnECJI?si=giuj8m61k6u-dxhv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="500" height="255" src="https://www.youtube.com/embed/6F57tdJzhMY?si=8numkY4PJAEkmjDb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                    <button className="btn2" onClick={() => window.open('https://www.youtube.com/channel/UC-l41V0vF_NNKKvS5FCHjFw', '_blank')}>Watch More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mp-content">
          <div className="k-section">
            <div className="inSection covers">
              <p className="pageHead">Covers</p>
              <div className="content">
                <div className="Vcards">
                  <iframe width="500" height="255" src="https://www.youtube.com/embed/COUwpJnMPgo?si=rgyqCAxu3G0t0n04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  <iframe width="500" height="255" src="https://www.youtube.com/embed/9uP5zn-1Vog?si=BWdUWMUyw38dKlNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  <iframe width="500" height="255" src="https://www.youtube.com/embed/1UEDMgGMPUw?si=yq4uGhhxVXAz6EYp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  <iframe width="500" height="255" src="https://www.youtube.com/embed/EUfcdXEslR0?si=PbkctuAfb1kVPhwu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                  <p style={{fontWeight:'200', marginTop:'80px'}}>Follow <span style={{fontWeight:'bold'}}> <a href="https://www.instagram.com/khanmmusic" style={{textDecoration:'none', color:'#cec3c1'}}>Khanm</a></span> on Instagram For More!</p>
                  <div></div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mp-content">
          <div className="k-section">
            <div className="inSection livepvids">
              <p className="pageHead">Live Performance</p>
              <div className="content">
                <div className="cards">
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </div>

    </div>
  )
}
