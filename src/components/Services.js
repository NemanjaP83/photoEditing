import React from 'react'

function Services() {
    return (
        <div className='container scrollspy' id='services'>
            <div className="row">
                <div className="col s12 l4">
                    <h3 className="indigo-text text-darken-2">
                        What I do...
                    </h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque doloribus dolor ea a unde fuga aliquid laboriosam praesentium possimus ipsa iure placeat officiis, et beatae id tempore neque eius nisi.
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque doloribus dolor ea a unde fuga aliquid laboriosam praesentium.
                    </p>
                </div>
                <div className="col s12 l6 offset-l2">
                    <ul className="tabs">
                        <li className="tab col s6">
                            <a href="#photography" className="indigo-text text-darken-4">Photography</a>
                        </li>
                        <li className="tab col s6">
                            <a href="#editing" className="indigo-text text-darken-4">Editing</a>
                        </li>
                    </ul>
                    <div className="col s12" id='photography'>
                        <p className="flow-text indigo-text text-darken-4">PHOTOGRAPHY</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est vitae maiores, molestiae quisquam ipsam voluptas eius iure natus nobis doloribus ab deleniti assumenda cumque maxime, quam sequi dignissimos consectetur.</p>
                    </div>
                    <div className="col s12" id='editing'>
                        <p className="flow-text indigo-text text-darken-4">EDITING</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est vitae maiores, molestiae quisquam ipsam voluptas eius iure natus nobis doloribus ab deleniti assumenda cumque maxime, quam sequi dignissimos consectetur.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
