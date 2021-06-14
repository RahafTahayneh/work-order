import React from 'react';
import {makeStyles} from "@material-ui/core";
import {observer} from "mobx-react";
import _ from 'lodash';
import Carousel from 'react-multi-carousel';
import {Empty} from "../empty";
import {OrdersStore} from "../../store/orders";
import {Card} from "../order";

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100%',
        width: '100%',
        fontFamily: 'Roboto',
        display: 'flex',
        alignItems: 'center',
        overflowX: 'auto',
        position: 'relative',
        '& >ul': {
            width: '100%',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            willChange: 'transform,transition',
            transformStyle: 'preserve-3d',
            listStyle: 'none',
            backfaceVisibility: 'hidden',
            '& >li': {
                marginRight: theme.spacing(1),
            }
        },
    },
}));

const Workers: React.FC = observer(() => {
    const classes = useStyles();

    const {filteredOrders} = OrdersStore;


    return (
        filteredOrders.length !== 0 ?
            <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                containerClass={classes.container}
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024,
                        },
                        items: 3,
                        partialVisibilityGutter: 40,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0,
                        },
                        items: 1,
                        partialVisibilityGutter: 30,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464,
                        },
                        items: 2,
                        partialVisibilityGutter: 30,
                    },
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {
                    _.map(filteredOrders, (order, index) =>
                        <Card key={index} order={order}/>
                    )
                }
            </Carousel> :
            <Empty/>
    )
});

export default Workers;