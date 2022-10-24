import React from 'react'
import "./Profilestyle.css"
import ProfileTabs from './profileTabs'

const ProfileSupplier = () => {
  return (
    //Main Div start
    <div className='main-div'>

    <div className='image-section-main'> {/* Image section start */}

    <div> {/*image start */} 
    <img src={require('./userImage.png').default} id="photo"></img>
    </div> {/*image end */}
    <br></br>
    <div>
        <p className='company-description'>Company Description</p>
        
        <div className='description-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum aliquam distinctio? Tenetur molestias nostrum delectus maxime. Quas quod quae perspiciatis neque? Eveniet repudiandae sed obcaecati quisquam blanditiis. Repellendus, perspiciatis.s

        </div>
        </div>

    </div> {/* Image section end */}

    <div className='profile-section-main'> {/*profile section start */}

    <div className='name-username-div'>
        <h2 className='name-style'>Liyanage Suwasana Dammithu</h2>
        <p className='username-style'>Username - Suwasana</p>
        </div>

        <div className='tabSection-div'>
        <ProfileTabs></ProfileTabs>
        </div>
    </div> {/*profile section end */}




    </div> // Main Div End 
  )
}

export default ProfileSupplier