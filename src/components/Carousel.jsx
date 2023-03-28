import { Button } from "@mui/material";
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "50px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "50px" }}
            onClick={onClick}
        />
    );
}

export default function Carousel() {



    // const [solaman, setSolaman] = useState(1)
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />


    };


    return (
        <div className="relative">
            {/* <button color="inherit" className="absolute top-0 bottom-0 my-auto -left-16 rounded-2xl bg-slate-200 w-8 h-8"><i className="fa-solid fa-arrow-left"></i></button>
            <button  color="inherit" className="absolute top-0 bottom-0 my-auto -right-16 rounded-2xl bg-slate-200 w-8 h-8"><i className="fa-solid fa-arrow-right"></i></button> */}

            <Slider {...settings} className='mb-10 '>
                <div>


             

                    <div className="flex justify-between items-center mt-10">
                        <div>
                            <h3 className="text-3xl">Face Makeup Brush</h3>
                            <h2 className="text-5xl my-5">Skin care brush <br /> Set sale 30% off</h2>

                            <Button color="inherit" variant="outlined">Shop now</Button>
                        </div>
                        <div>
                            <img width={700} height={700} src="https://149359231.v2.pressablecdn.com/wp-content/uploads/2019/07/IT-Cosmetics-July-2019-QVC-TSV_Fair-e1564121284894.jpg" />
                        </div>

                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center mt-10">
                        <div>
                            <h3 className="text-3xl">Face Makeup Brush</h3>
                            <h2 className="text-5xl my-5">Skin care brush <br /> Set sale 30% off</h2>

                            <Button color="inherit" variant="outlined">Shop now</Button>
                        </div>
                        <div>
                            <img width={700} height={700} src="https://cdn.shopify.com/s/files/1/1583/0411/products/hero_main_image_1000x.jpg?v=1557807597" />
                        </div>

                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center mt-10">
                        <div>
                            <h3 className="text-3xl">Face Makeup Brush</h3>
                            <h2 className="text-5xl my-5">Skin care brush <br /> Set sale 30% off</h2>

                            <Button color="inherit" variant="outlined">Shop now</Button>
                        </div>
                        <div>
                            <img width={700} height={700} src="https://i04.hsncdn.com/is/image/HomeShoppingNetwork/rocs1200/it-cosmetics-fair-your-it-essentials-4-piece-collection-d-20190712095801627~674477.jpg" />
                        </div>

                    </div>
                </div>

            </Slider>
        </div>

    );
}

