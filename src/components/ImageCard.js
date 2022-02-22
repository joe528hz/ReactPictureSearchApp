import React from "react";

class ImageCard extends React.Component {
    constructor() {
        super()
        this.state = { spans: 0 }
        //ref system accessing individual DOM element
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight
        //how many rows the image would take for the grid system
        const spans = Math.ceil(height / 10)
        this.setState({ spans: spans })
    }


    render() {
        const { description, urls } = this.props.image

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard