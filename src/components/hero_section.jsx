import { Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Fragment } from "react"
import hero from '../assets/images/illustration-hero.svg';
import moreInfoImage from '../assets/images/illustration-features-tab-1.svg';
import chrome_logo from '../assets/images/logo-chrome.svg';
import fire_logo from '../assets/images/logo-firefox.svg';
import opera_logo from '../assets/images/logo-opera.svg';
import { RiArrowDropDownLine } from '@remixicon/react'


const HeroSection = () => {

    
    return ( 
        <Fragment>
        <Container sx={{
            marginTop : '25vh'
        }}>
            <Grid container >
                <Grid item  lg={4}>
                    <div>
                        <div>
                        <Typography
                            fontSize={32}
                            
                        >
                            A Simple Bookmark Manager
                        </Typography>
                        </div>
                       
                        <div style={{
                            marginBlock : '10px'
                        }}>
                            <Typography
                                color={'hsl(229, 8%, 60%)'}
                            >
                                A clean and simple interface to orginize your favourite websites. Open a new browser tap and see your sites load. Try it for free.
                            </Typography>
                        </div>
                        <div className="hero-section-btns">
                            <div className="button-one">
                                <button> Get it on Chrome </button>
                            </div>
                            <div className="button-two">
                                <button> Get it on FireFox </button>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={4} sx={{
                    marginLeft : '40px'
                }}>
                    <div className="" style={{
                        marginTop : "9vh"
                    }}>
                        <div className="blue-div">

                        </div>
                        <div style={{
                            transform : 'translateY(-55vh)',
                            marginLeft : '10vw'
                        }}>
                            <img src={hero} style={{
                                
                                
                                height : '50vh',
                                objectFit : 'cover',
                            }}/>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={12} sx={{
                    display : 'flex',
                    justifyContent : 'center'
                }}>
                    <div style={{display : 'flex', justifyContent : 'center', transform : 'translateY(-40vh)', width : '35vw'}} >
                        <div style={{textAlign : 'center'}}>
                            <p style={{
                                fontSize : '28px',
                                fontWeight : 'bold'
                            }}>Features</p>
                            <p style={{
                                color : 'hsl(229, 8%, 60%)'
                            }}>
                                Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
                            </p>
                        </div>
                    </div>
                    
                </Grid>
            </Grid>
            <div style={{display : 'flex', justifyContent : 'center'}}>
                <div style={{display : 'flex', justifyContent : 'center', gap : '30px', transform : 'translateY(-30vh)', width : '45vw', borderBottom : '2px solid hsla(229, 8%, 60%, 0.295)'}}>
                    <div className="features">
                        <p>Simple bookmarking</p>
                    </div>
                    <div className="features">
                        <p> Speedy Searching </p>
                    </div>
                    <div className="features">
                        <p> Easy Sharing </p>
                    </div>
                </div>
            </div>
            

            <Grid container sx={{
                transform : 'translateY(-15vh)'
            }}>
            <Grid item lg={4}>
                    <div className="" style={{
                        marginTop : "5vh"
                    }}>
                        <div className="blue-div_2">

                        </div>
                        <div style={{
                            transform : 'translateY(-55vh)',
                            marginLeft : '5vw'
                        }}>
                            <img src={moreInfoImage} style={{
                                
                                
                                height : '45vh',
                                objectFit : 'cover',
                            }}/>
                        </div>
                    </div>
                </Grid>
                <Grid item  lg={4} sx={{
                    marginLeft : '25vw'
                }}>
                    <div>
                        <div>
                        <Typography
                            fontSize={32}
                            
                        >
                            Bookmark in one click.
                        </Typography>
                        </div>
                       
                        <div style={{
                            marginBlock : '10px'
                        }}>
                            <Typography
                                color={'hsl(229, 8%, 60%)'}
                            >
                                A clean and simple interface to orginize your favourite websites. Open a new browser tap and see your sites load. Try it for free.
                            </Typography>
                        </div>
                        <div className="hero-section-btns">
                            <div className="button-one">
                                <button> More info </button>
                            </div>
                        </div>
                    </div>
                </Grid>
                
                <Grid item lg={12} sx={{
                    display : 'flex',
                    justifyContent : 'center'
                }}>
                    <div style={{display : 'flex', justifyContent : 'center', transform : 'translateY(-40vh)', width : '35vw'}} >
                        <div style={{textAlign : 'center'}}>
                            <p style={{
                                fontSize : '28px',
                                fontWeight : 'bold'
                            }}>Download the extension</p>
                            <p style={{
                                color : 'hsl(229, 8%, 60%)'
                            }}>
                                We've got more browsers in the pipeline. Please do leet us know if you've got a favourite you'd like to prioritize.
                            </p>
                        </div>
                    </div>
                </Grid>
                <Grid sx={{
                    transform : 'translateY(-35vh)'
                }}>
                    <div>
                        <Card sx={{
                            paddingBlock : '20px',
                            borderRadius : '6px',
                            boxShadow : '0 0 20px -10px #9194a1',
                            marginLeft : '20vw'
                        }}>
                            {/* <CardMedia 
                                 component="img"
                                 height="50"
                                 width="50"
                                 image={chrome_logo}
                                 alt="Paella dish"
                            /> */}
                            <div style={{
                                display : 'flex',
                                justifyContent : 'center',
                                paddingBlock : '10px'
                            }}>
                                <img src={chrome_logo} style={{
                                    height : '90px',
                                    width : '90px'
                                }} />
                            </div>
                            <CardContent sx={{
                                textAlign : 'center'
                            }}>
                                <Typography>
                                    Add to Chrome
                                </Typography>
                                <Typography>
                                    Minimum version 62
                                </Typography>
                                
                            </CardContent>
                            <div style={{
                                    height : '2px',
                                    width : 'auto',
                                    borderBottom : '2px dashed #9194a1'
                                }}>

                                </div>
                            <CardActions>
                                <div>
                                    <button style={{
                                        border: 0,
                                        background: '#5368df',
                                        paddingInline: '22pt',
                                        paddingBlock: '12px',
                                        borderRadius: '6px',
                                        marginTop: '15px',
                                        fontSize: '13px',
                                        color: 'white',
                                        fontFamily: 'var(--fontFamily)',
                                        boxShadow: '0px 8px 10px -1px hsla(229, 8%, 60%, 0.295)',
                                    }}> Add and Install Extension </button>
                                </div>
                            </CardActions>
                        </Card>
                    </div>
                </Grid>
            
                <Grid sx={{
                    transform : 'translateY(-31vh)',
                    marginInline : '25pt'
                    
                }}>
                    <div>
                        <Card sx={{
                            paddingBlock : '20px',
                            borderRadius : '6px',
                            boxShadow : '0 0 20px -10px #9194a1'
                        }}>
                            {/* <CardMedia 
                                 component="img"
                                 height="50"
                                 width="50"
                                 image={chrome_logo}
                                 alt="Paella dish"
                            /> */}
                            <div style={{
                                display : 'flex',
                                justifyContent : 'center',
                                paddingBlock : '10px'
                            }}>
                                <img src={fire_logo} style={{
                                    height : '90px',
                                    width : '90px'
                                }} />
                            </div>
                            <CardContent sx={{
                                textAlign : 'center'
                            }}>
                                <Typography>
                                    Add to Chrome
                                </Typography>
                                <Typography>
                                    Minimum version 62
                                </Typography>
                                
                            </CardContent>
                            <div style={{
                                    height : '2px',
                                    width : 'auto',
                                    borderBottom : '2px dashed #9194a1'
                                }}>

                                </div>
                            <CardActions>
                                <div>
                                    <button style={{
                                        border: 0,
                                        background: '#5368df',
                                        paddingInline: '22pt',
                                        paddingBlock: '12px',
                                        borderRadius: '6px',
                                        marginTop: '15px',
                                        fontSize: '13px',
                                        color: 'white',
                                        fontFamily: 'var(--fontFamily)',
                                        boxShadow: '0px 8px 10px -1px hsla(229, 8%, 60%, 0.295)',
                                    }}> Add and Install Extension </button>
                                </div>
                            </CardActions>
                        </Card>
                    </div>
                </Grid>

                <Grid sx={{
                    transform : 'translateY(-26vh)'
                }}>
                    <div>
                        <Card sx={{
                            paddingBlock : '20px',
                            borderRadius : '6px',
                            boxShadow : '0 0 20px -10px #9194a1'
                        }}>
                            {/* <CardMedia 
                                 component="img"
                                 height="50"
                                 width="50"
                                 image={chrome_logo}
                                 alt="Paella dish"
                            /> */}
                            <div style={{
                                display : 'flex',
                                justifyContent : 'center',
                                paddingBlock : '10px'
                            }}>
                                <img src={opera_logo} style={{
                                    height : '90px',
                                    width : '90px'
                                }} />
                            </div>
                            <CardContent sx={{
                                textAlign : 'center'
                            }}>
                                <Typography>
                                    Add to Chrome
                                </Typography>
                                <Typography>
                                    Minimum version 62
                                </Typography>
                                
                            </CardContent>
                            <div style={{
                                    height : '2px',
                                    width : 'auto',
                                    borderBottom : '2px dashed #9194a1'
                                }}>

                                </div>
                            <CardActions>
                                <div>
                                    <button style={{
                                        border: 0,
                                        background: '#5368df',
                                        paddingInline: '22pt',
                                        paddingBlock: '12px',
                                        borderRadius: '6px',
                                        marginTop: '15px',
                                        fontSize: '13px',
                                        color: 'white',
                                        fontFamily: 'var(--fontFamily)',
                                        boxShadow: '0px 8px 10px -1px hsla(229, 8%, 60%, 0.295)',
                                    }}> Add and Install Extension </button>
                                </div>
                            </CardActions>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </Container>

        <Container>
            <Grid container>
                <Grid item lg={12} >
                    <div style={{
                        display : 'flex',
                        justifyContent : 'center',
                    }}>
                        <div>
                            <Grid >
                                <Grid item>
                                    <Card elevation={false} sx={{
                                        width : '40vw',
                                        textAlign : 'center'
                                    }}>
                                        <Typography
                                            variant="h5"
                                            fontWeight={400}
                                        >
                                            Frequently Asked Questions
                                        </Typography>
                                        <Typography color={'#9194a1'}>
                                            Here are some of our FAQs. If you have any other questions you'd like to answer, please feel free to email us
                                        </Typography>
                                    </Card>
                                </Grid>

                                <Grid item>
                                    <Card elevation={false} sx={{
                                        width : '30vw',
                                        textAlign : 'center',
                                        marginBlock : '20pt'
                                    }}>
                                        
                                       <div style={{
                                        display : 'flex',
                                        justifyContent : 'space-between'
                                       }}>
                                            <span>What is bookmark ? </span>
                                            <div>
                                            <RiArrowDropDownLine style={{
                                                marginTop : '-5px'
                                            }}/>
                                            </div>
                                            
                                       </div>
                                    </Card>
                                    <Card elevation={false} sx={{
                                        width : '30vw',
                                        // textAlign : 'center',
                                        marginBlock : '20pt'
                                    }}>
                                        
                                       <div style={{
                                        display : 'flex',
                                        justifyContent : 'space-between'
                                       }}
                                        
                                       >
                                            <span>What is bookmark ? </span>
                                            <div>
                                            <RiArrowDropDownLine style={{
                                                marginTop : '-5px'
                                            }}/>
                                            </div>
                                            
                                       </div>
                                       <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, officiis!
                                       </p>

                                    </Card>
                                    <Card elevation={false} sx={{
                                        width : '30vw',
                                        textAlign : 'center',
                                        marginBlock : '20pt'
                                    }}>
                                        
                                       <div style={{
                                        display : 'flex',
                                        justifyContent : 'space-between'
                                       }}>
                                            <span>What is bookmark ? </span>
                                            <div>
                                            <RiArrowDropDownLine style={{
                                                marginTop : '-5px'
                                            }}/>
                                            </div>
                                            
                                       </div>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
        </Fragment>
     );
}
 
export default HeroSection;