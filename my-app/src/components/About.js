import React from 'react'
import image from '../images/Adrian Sieroslawski (1).jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function About() {
  return (
    <section>
        <div className="about-wrapper">                     
        <div className="description">
        <h1 className="title-description">About Me</h1>       
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <div className="skill-container">         
            <h2 className="title-description">Skills</h2>
            <p>HTML5 <FontAwesomeIcon icon={brands('html5')}  size="3x" className="html5-icon"/></p>
            <hr/>
            <p>CSS <FontAwesomeIcon icon={brands('css3')}  size="3x" className="css-icon"/></p>
            <hr/>
            <p>SASS <FontAwesomeIcon icon={brands('sass')}  size="3x" className="sass-icon"/></p>
            <hr/>
            <p>Javascript <FontAwesomeIcon icon={brands('js')}  size="3x" className="js-icon"/></p>
            <hr/>
            <p>React <FontAwesomeIcon icon={brands('react')}  size="3x" className="react-icon"/></p>
            <hr/>
            <p>Angular <FontAwesomeIcon icon={brands('angular')}  size="3x" className="angular-icon"/></p>
            <hr/>
            <p>Typescript <svg width="42px" height="42px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" >
	<g>
		<polygon fill="#007ACC" transform="translate(128.000000, 128.000000) scale(1, -1) translate(-128.000000, -128.000000) " points="0 128 0 0 128 0 256 0 256 128 256 256 128 256 0 256"></polygon>
		<path d="M146.658132,223.436863 L146.739401,212.953054 L130.079084,212.953054 L113.418767,212.953054 L113.418767,165.613371 L113.418767,118.273689 L101.63464,118.273689 L89.8505126,118.273689 L89.8505126,165.613371 L89.8505126,212.953054 L73.1901951,212.953054 L56.5298776,212.953054 L56.5298776,223.233689 C56.5298776,228.922577 56.6517824,233.676863 56.8143221,233.798768 C56.9362269,233.961308 77.2130522,234.042577 101.797179,234.001943 L146.536227,233.880038 L146.658132,223.436863 Z" fill="#FFFFFF" transform="translate(101.634640, 176.142993) rotate(-180.000000) translate(-101.634640, -176.142993) "></path>
		<path d="M206.566631,234.272145 C213.068219,232.646748 218.025679,229.761668 222.57679,225.048018 C224.933616,222.528653 228.428219,217.936907 228.712663,216.839764 C228.793933,216.514684 217.659965,209.037859 210.914568,204.852462 C210.670758,204.689922 209.69552,205.74643 208.598377,207.371827 C205.306949,212.166748 201.852981,214.239129 196.570441,214.604843 C188.809171,215.133097 183.811076,211.069605 183.851711,204.283573 C183.851711,202.292462 184.136155,201.114049 184.948854,199.488653 C186.65552,195.953414 189.825044,193.840399 199.7806,189.533097 C218.106949,181.649922 225.949489,176.448653 230.825679,169.053097 C236.270758,160.804208 237.489806,147.638494 233.792028,137.845478 C229.728536,127.199129 219.651076,119.966113 205.469489,117.568653 C201.080917,116.796589 190.678377,116.918494 185.964727,117.771827 C175.684092,119.600399 165.931711,124.679764 159.917743,131.343891 C157.560917,133.944526 152.969171,140.730557 153.253616,141.218176 C153.37552,141.380716 154.432028,142.030875 155.610441,142.721668 C156.748219,143.371827 161.05552,145.850557 165.119012,148.207383 L172.473933,152.474049 L174.01806,150.198494 C176.171711,146.907065 180.885362,142.396589 183.729806,140.893097 C191.897425,136.585795 203.112663,137.195319 208.639012,142.15278 C210.995838,144.30643 211.971076,146.541351 211.971076,149.83278 C211.971076,152.799129 211.605362,154.099446 210.061235,156.334367 C208.070123,159.178811 204.006631,161.576272 192.466314,166.574367 C179.259965,172.263256 173.571076,175.798494 168.369806,181.406113 C165.362822,184.656907 162.518377,189.858176 161.339965,194.206113 C160.364727,197.822621 160.120917,206.884208 160.892981,210.541351 C163.61552,223.300716 173.245996,232.199764 187.143139,234.841034 C191.653616,235.694367 202.137425,235.369287 206.566631,234.272145 Z" fill="#FFFFFF" transform="translate(194.578507, 176.190240) scale(1, -1) translate(-194.578507, -176.190240) "></path>
	</g>
</svg></p>
            <hr/>
            <p>C# <svg fill="none" height="42px" viewBox="204.925 153.577 757.617 860.543" width="42px" xmlns="http://www.w3.org/2000/svg">
<path d="m962.541 407.983c0-14.237-3.034-27.074-9.336-37.811-6.068-10.736-15.171-19.605-27.307-26.607-100.829-58.117-201.891-116.233-302.72-174.35-27.308-15.638-53.449-15.171-80.523.7-40.145 23.574-241.336 138.873-301.086 173.65-24.741 14.237-36.644 36.177-36.644 64.652v351.033c0 14.004 3.034 26.374 8.869 37.111 6.069 10.97 15.405 20.306 27.775 27.541 59.984 34.777 260.941 149.843 301.086 173.65 27.074 15.868 53.448 16.568 80.523.7 100.829-58.35 201.891-116.233 302.72-174.35 12.603-7.235 21.706-16.338 27.774-27.541 5.835-10.737 8.869-23.107 8.869-37.111z" fill="#9a4993"/>
<path d="m584.667 582.333-371.34 213.794c6.069 10.97 15.405 20.306 27.775 27.542 59.984 34.776 260.941 149.842 301.086 173.649 27.074 15.872 53.449 16.572 80.523.7 100.829-58.35 201.891-116.233 302.72-174.349 12.603-7.236 21.706-16.338 27.774-27.542z" fill="#6a1577"/><path d="m474.735 645.584c21.707 37.811 62.318 63.252 108.765 63.252 46.913 0 87.758-25.674 109.231-63.952l-108.064-62.551z" fill="#6a1577"/>
<path d="m962.542 407.983c0-14.237-3.035-27.074-9.336-37.811l-368.539 212.161 369.005 213.795c5.835-10.737 8.87-23.107 8.87-37.111z" fill="#813084"/><g fill="#fff">
<path d="m692.731 644.884c-21.472 38.044-62.317 63.952-109.231 63.952-46.68 0-87.291-25.441-108.764-63.252-10.503-18.438-16.572-39.444-16.572-62.084 0-69.32 56.016-125.336 125.336-125.336 46.213 0 86.592 25.207 108.298 62.551l109.464-63.018c-43.645-75.154-124.869-125.802-217.995-125.802-139.107 0-251.605 112.732-251.605 251.605 0 45.513 12.136 88.459 33.376 125.336 43.412 75.388 125.102 126.269 218.462 126.269 93.594 0 175.284-51.114 218.696-126.969zm138.406-120.901h-24.974v120.668h24.974zm55.316 0h-24.974v120.668h24.974z"/>
<path d="m906.759 544.289h-120.668v24.974h120.668zm0 55.082h-120.668v24.974h120.668z"/></g></svg></p>
            <hr/>
            <p>ASP.NET<svg width="52px" height="52px" enable-background="new 0 0 504 504" id="Layer_1" version="1.1" viewBox="0 0 504 504">
<path d="M454.6,256.6c-9.2,58.5-27.1,75.6-58.8,114.9c-31.7,33.3-77.3,88.9-141.9,85.8  c-58.5-9.2-75.6-27.1-114.9-58.8c-33.3-31.7-88.9-77.3-85.8-141.9c9.2-58.5,27.1-75.6,58.8-114.9c31.7-33.3,77.3-88.9,141.9-85.8  c58.5,9.2,75.6,27.1,114.9,58.8C402.1,146.4,457.7,192,454.6,256.6z" fill="#3765AF"/><g>
<path d="M137,282.4h-23.2l-3.2,12H89.8l24.8-72.8h22.2l24.8,72.8h-21.3L137,282.4L137,282.4z M132.7,266.7   l-7.3-26.2l-7.2,26.2H132.7L132.7,266.7z M153.2,270.3l19.4-1.4c0.5,3.5,1.3,6.1,2.6,7.9c2.1,2.9,5.1,4.4,9,4.4   c2.9,0,5.1-0.7,6.7-2.3c1.5-1.5,2.4-3.3,2.4-5.2c0-1.9-0.7-3.6-2.3-5.1c-1.5-1.5-5-2.9-10.4-4.2c-8.9-2.2-15.3-5.2-19.1-8.8   c-3.8-3.6-5.7-8.4-5.7-14c0-3.7,1-7.3,2.9-10.6c2-3.3,4.9-5.9,8.8-7.8c3.9-1.9,9.3-2.8,16.2-2.8c8.4,0,14.9,1.7,19.2,5.2   c4.4,3.5,7,8.9,7.8,16.5l-19.2,1.3c-0.5-3.3-1.5-5.7-3.2-7.2c-1.6-1.5-3.9-2.2-6.7-2.2c-2.4,0-4.2,0.5-5.4,1.6   c-1.2,1.1-1.8,2.5-1.8,4c0,1.2,0.5,2.2,1.5,3.1c1,1,3.3,1.8,6.8,2.6c8.9,2.1,15.2,4.3,19.1,6.5c3.8,2.2,6.7,4.8,8.4,8.1   c1.7,3.2,2.6,6.8,2.6,10.8c0,4.6-1.2,8.9-3.6,12.9c-2.4,3.9-5.6,6.9-9.8,8.9c-4.2,2-9.5,3-15.9,3c-11.2,0-19-2.4-23.2-7.2   C156.3,283.7,153.8,277.7,153.2,270.3L153.2,270.3z M212,221.6h33.8c7.4,0,12.9,1.9,16.6,5.8c3.6,3.8,5.5,9.4,5.5,16.5   c0,7.4-2,13.1-6,17.2c-4,4.1-10.1,6.2-18.3,6.2h-11.1v27.1H212V221.6L212,221.6z M232.4,252.6h5c3.9,0,6.7-0.7,8.3-2.3   c1.5-1.5,2.4-3.5,2.4-5.7s-0.7-4.3-2.1-5.8s-3.9-2.4-7.7-2.4h-5.8V252.6L232.4,252.6z" fill="#FFFFFF"/>
<path d="M276,293.6v-62.1h8.3v8.8c4-6.8,9.8-10.2,17.3-10.2c3.3,0,6.3,0.6,9,2s4.8,3.1,6.2,5.3   c1.4,2.2,2.3,4.7,2.9,7.7c0.4,1.9,0.5,5.4,0.5,10.2v38.1h-9.2v-37.7c0-4.3-0.4-7.5-1.1-9.6c-0.7-2.1-2-3.8-3.8-5.1   c-1.8-1.3-4-1.9-6.5-1.9c-3.9,0-7.3,1.5-10.2,4.3c-2.8,2.8-4.3,8.2-4.3,16.2v33.9L276,293.6L276,293.6z M371.5,273.6l9.5,1.4   c-1.5,6.4-4.3,11.3-8.3,14.8c-4.1,3.5-9.3,5.3-15.6,5.3c-7.9,0-14.2-2.8-18.9-8.4c-4.6-5.6-7-13.4-7-23.5c0-10.5,2.4-18.5,7-24.3   c4.7-5.7,10.8-8.7,18.3-8.7c7.3,0,13.2,2.8,17.8,8.5c4.6,5.7,6.9,13.6,6.9,23.8c0,0.6,0,1.5-0.1,2.8h-40.6c0.4,6.8,2,12,5.1,15.7   c3,3.6,6.8,5.5,11.4,5.5c3.4,0,6.3-1,8.7-3C368.2,281.3,370.1,278,371.5,273.6L371.5,273.6z M341.2,256.6h30.4   c-0.4-5.2-1.5-9.1-3.5-11.8c-2.9-4-6.7-6.1-11.4-6.1c-4.2,0-7.7,1.6-10.7,4.8C343.1,246.8,341.6,251.2,341.2,256.6L341.2,256.6z    M412.7,284.2l1.4,9.3c-2.6,0.6-4.9,0.9-6.9,0.9c-3.4,0-5.9-0.6-7.7-1.8c-1.8-1.2-3.1-2.8-3.9-4.7c-0.7-1.9-1.1-6.1-1.1-12.4v-35.7   H365v-8.2h29.4v-15.4l9.2-6.3v21.7h9.3v8.2h-9.3V276c0,3,0.2,4.9,0.5,5.7c0.4,0.8,0.8,1.5,1.5,2.1c0.7,0.5,1.8,0.7,3.1,0.7   C409.7,284.6,411.1,284.5,412.7,284.2L412.7,284.2z" fill="#FFFFFF"/>
<path d="M262.3,277.5c4,0,7.4,3.4,7.4,7.5c0,4.1-3.3,7.5-7.4,7.5c-4,0-7.4-3.4-7.4-7.5   C254.9,280.9,258.2,277.5,262.3,277.5L262.3,277.5z" fill="#FFFFFF"/></g></svg></p>
            <hr/>
            <p>SQL <FontAwesomeIcon icon={solid('database')}  size="3x" className="sql-icon"/></p>
            <hr/>
            <p>AWS <FontAwesomeIcon icon={brands('aws')}  size="3x" className="aws-icon"/></p>           
        </div>
        </div>
        <div className="headshot">
            <img src={image}></img> 
        </div>                      
    </div>
    </section>
  )
}

export default About