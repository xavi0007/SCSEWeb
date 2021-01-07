import React, {Component} from 'react'
import ImageScroller from 'react-image-scroller';
import './Layout.css'
import {ButtonOverlay} from '../Button';


export default class B2Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levelData: [{
                btnNames: ["Lounge", "SWLab1", "HWLab1"],
                image: "/images/b2/map/a.jpg",
            },
                {
                    btnNames: ["HWLab2"],
                    image: "/images/b2/map/b.jpg",
                },
                {
                    btnNames: ["SWLab2", "HPL"],
                    image: "/images/b2/map/c.jpg",
                }],
            yaww: 180,
            updateText: "initial",
            author: "SCSE",
            level: 1,
            showPano: false
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.setData = this.setData.bind(this)

    }

    componentDidMount() {
        this.setData()
    }

    componentWillUnmount() {

    }

    setData() {
        this.setState({
            levelData: [{
                btnNames: ["SPL"],
                image: "/images/b2/map/a.jpg",
            },
                {
                    btnNames: [],
                    image: "/images/b2/map/b.jpg",
                },
                {
                    btnNames: ["SW3"],
                    image: "/images/b2/map/c.jpg",
                }],
            yaww: 180,
            updateText: "initial",
            author: "SCSE",
            level: 1,
            showPano: false
        })
    }

    stopPano() {
        this.setState({showPano: false});
    }

    handleToggleClick(event) {
        const childPanoMap = {}
        this.setState({
            showPano: true,
        });
        this.childPano = childPanoMap[event.target.id]
    }

    render() {


        this.items = this.state.levelData.map((item, i) =>
            <div className='container' key={i}>
                {item.btnNames.map(
                    (btnName, j) => <span key={j}>
                        {(btnName === "Lounge" || btnName === "HPL") ?
                            <ButtonOverlay className='first' id={btnName}
                                           onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>
                            : (btnName === "HWLab1") ?
                                <ButtonOverlay className='third' id={btnName}
                                               onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>
                                : <ButtonOverlay className='second' id={btnName}
                                                 onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>
                        }

                    </span>)}
                <img src={item.image} alt={''}/>
            </div>
        );
        let loadLayout = <ImageScroller>{this.items}</ImageScroller>
        let loadPano = <div className='layout-container'>{this.childPano}</div>

        return (
            <div>
                {
                    (this.state.showPano) ? loadPano : loadLayout
                }
            </div>
        )
    }
}
