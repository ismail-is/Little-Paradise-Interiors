import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Sidebar from './sidebar';

class ShopDetails32 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = this.props.customClass ? this.props.customClass :''
    let sectionClass = this.props.sectionClass ? this.props.sectionClass :''
    return (
		<div className="ltn__product-area ltn__product-gutter mb-100">
		<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="ltn__shop-options">
						<ul>
						<li>
							
							<div className="ltn__grid-list-tab-menu ">
							<div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---" >
							<div className="nav" id='responsive-text-project-heading'>
								{/* <a className="active show" data-bs-toggle="tab" href="#liton_product_grid" style={{fontFamily:'Poppins, sans-serif '}}>All Projects</a>
								<a  data-bs-toggle="tab" href="#Architecture" style={{fontFamily:'Poppins, sans-serif '}}>Architecture Design</a>
								<a  data-bs-toggle="tab" href="#Commercial" style={{fontFamily:'Poppins, sans-serif '}}> Interior Design</a> */}
{/* 								
								<Link   to='/allprojects'>All Projects</Link>
								<Link  to='/Architecture'>Architecture Design</Link>
								<Link  to='/Interior' className="active show" style={{color:'#082A9D'}}> Interior Design</Link>
								 */}
								{/* <a data-bs-toggle="tab" href="#liton_product_list"><i className="fas fa-list" /></a> */}
							</div>
							
							</div>
							</div>
						</li>
						
						
						</ul>
						<div className="tab-content " >
						<div style={{ textAlign: 'start', marginTop: '-80px' }}>
  <h5
    id="responsive-text-project-heading"
    style={{
      marginTop: '-90px',
      marginBottom: '20px',
      position: 'relative',
      display: 'inline-block',
    }}
  >
    Check out some of Our works
    {/* <span
      style={{
        content: '""',
        position: 'absolute',
        bottom: '-7px',
        left: '50%',
        transform: 'translateX(-90%)',
        height: '2px',
        width: '50%',
        backgroundColor: '#00249A', 
      }}
    ></span> */}
  </h5>
  <style>
    {`
      #responsive-text-project-heading {
        font-size: 35px;
      }
      @media (max-width: 768px) {
        #responsive-text-project-heading {
          font-size: 25px;
        }
      }
    `}
  </style>
</div>


						<div className="tab-pane fade active show" id="Commercial">
								<div className="ltn__product-tab-content-inner ltn__product-grid-view" id='responsive-text-project-heading'>
									<div className="row">
									<div className="col-lg-12">
										{/* Search Widget */}
									
									</div>

									

									<div className="ltn__gallery-active row ltn__gallery-style-2 ltn__gallery-info-hide---">
															<div className="ltn__gallery-sizer " />
															{/* gallery-item */}
															<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
															<div className="ltn__gallery-item-inner">
																<div className="ltn__gallery-item-img">
																<Link to="/TWL"> 
																<img src={publicUrl+"assets/img/Allimgs/Picture95.webp"} alt="Image" />
																	
																	</Link>
																</div>
																<div className="ltn__gallery-item-info" >
																	
																<h4 className="go-top" style={{marginTop:'-170px'}}><Link to="/TWL">TWL</Link></h4>
																
															
																</div>
															</div>
															</div>
															


															<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
															<div className="ltn__gallery-item-inner">
																<div className="ltn__gallery-item-img">
																<Link to="/Earthessence"> 
																<img src={publicUrl+"assets/img/Allimgs/Picture45.webp"} alt="Image" />
																	
																	</Link>
																</div>
																<div className="ltn__gallery-item-info" >
																	
																<h4 className="go-top" ><Link to="/Earthessence">Earthessence</Link></h4>
																
															
																</div>
															</div>
															</div>
															

															<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
															<div className="ltn__gallery-item-inner">
																<div className="ltn__gallery-item-img">
																<Link to="/Sky"> 
																<img src={publicUrl+"assets/img/Allimgs/Picture57.webp"}  alt="Image" />
																	
																	</Link>
																</div>
																<div className="ltn__gallery-item-info" >
																	
																<h4 className="go-top" style={{marginTop:'-170px'}}><Link to="/Sky">Sky</Link></h4>
																
															
																</div>
															</div>
															</div>

															
															<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
															<div className="ltn__gallery-item-inner">
																<div className="ltn__gallery-item-img">
																<Link to="/LEGACY"> 
																<img src={publicUrl+"assets/img/Allimgs/Picture117.webp"} alt="Image" />
																	
																	</Link>
																</div>
																<div className="ltn__gallery-item-info" >
																	
																<h4 className="go-top" style={{marginTop:'-170px'}}><Link to="/LEGACY">Legacy</Link></h4>
																
															
																</div>
															</div>
															</div>


															<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
															<div className="ltn__gallery-item-inner">
																<div className="ltn__gallery-item-img">
																<Link to="/Terra"> 
																<img src={publicUrl+"assets/img/Allimgs/Picture65.webp"} alt="Image" />
																	
																	</Link>
																</div>
																<div className="ltn__gallery-item-info" >
																	
																<h4 className="go-top" style={{marginTop:'-170px'}}><Link to="/Terra">Terra</Link></h4>
																
															
																</div>
															</div>
															</div>


															<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
															<div className="ltn__gallery-item-inner">
																<div className="ltn__gallery-item-img">
																<Link to="/GamingRoom"> 
																<img src={publicUrl+"assets/img/Allimgs/Picture34.webp"} alt="Image" />
																	
																	</Link>
																</div>
																<div className="ltn__gallery-item-info" >
																	
																<h4 className="go-top" style={{marginTop:'-170px'}}><Link to="/GamingRoom">GamingRoom</Link></h4>
																
															
																</div>
															</div>
															</div>


															<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
															<div className="ltn__gallery-item-inner">
																<div className="ltn__gallery-item-img">
																<Link to="/InGreen"> 
																<img src={publicUrl+"assets/img/Allimgs/Picture75.webp"} alt="Image" />
																	
																	</Link>
																</div>
																<div className="ltn__gallery-item-info" >
																	
																<h4 className="go-top" style={{marginTop:'-170px'}}><Link to="/InGreen">In to the Green</Link></h4>
																
															
																</div>
															</div>
															</div>


															<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
															<div className="ltn__gallery-item-inner">
																<div className="ltn__gallery-item-img">
																<Link to="/SpecksDesk"> 
																<img src={publicUrl+"assets/img/Allimgs/Picture91.webp"} alt="Image" />
																	
																	</Link>
																</div>
																<div className="ltn__gallery-item-info" >
																	
																<h4 className="go-top" style={{marginTop:'-150px'}}><Link to="/SpecksDesk">SpecksDesk</Link></h4>
																
															
																</div>
															</div>
															</div>


															<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
															<div className="ltn__gallery-item-inner">
																<div className="ltn__gallery-item-img">
																<Link to="/Dreamy"> 
																<img src={publicUrl+"assets/img/Allimgs/Picture87.webp"} alt="Image" />
																	
																	</Link>
																</div>
																<div className="ltn__gallery-item-info" >
																	
																<h4 className="go-top" style={{marginTop:'-170px'}}><Link to="/Dreamy">Dreamy</Link></h4>
																
															
																</div>
															</div>
															</div>



															<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
															<div className="ltn__gallery-item-inner">
																<div className="ltn__gallery-item-img">
																<Link to="/Raw"> 
																<img src={publicUrl+"assets/img/Allimgs/Picture83.webp"} alt="Image" />
																	
																	</Link>
																</div>
																<div className="ltn__gallery-item-info" >
																	
																<h4 className="go-top" style={{marginTop:'-170px'}}><Link to="/Raw">Raw</Link></h4>
																
															
																</div>
															</div>
															</div>


															<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
															<div className="ltn__gallery-item-inner">
																<div className="ltn__gallery-item-img">
																<Link to="/PERLIYAS"> 
																<img src={publicUrl+"assets/img/Allimgs/Picture111.webp"} alt="Image" />
																	
																	</Link>
																</div>
																<div className="ltn__gallery-item-info" >
																	
																<h4 className="go-top" ><Link to="/PERLIYAS">Hospital - Dialysis Center</Link></h4>
																
															
																</div>
															</div>
															</div>


															<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
															<div className="ltn__gallery-item-inner">
																<div className="ltn__gallery-item-img">
																<Link to="/BACKtoBALANCE"> 
																<img src={publicUrl+"assets/img/Allimgs/Picture123.webp	"} alt="Image" />
																	
																	</Link>
																</div>
																<div className="ltn__gallery-item-info" >
																	
																<h4 className="go-top" style={{marginTop:'-170px'}}><Link to="/BACKtoBALANCE">Back TO Balance </Link></h4>
																
															
																</div>
															</div>
															</div>
															{/* gallery-item */}
														         
														</div>





									
									{/* ltn__product-item */}
								
									
									</div>
								</div>
								</div>
						</div>
					</div>
					</div>
					</div>
					</div>
					</div>
    )
  }
}

export default ShopDetails32;
