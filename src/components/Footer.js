import React from 'react'

function Footer() {
    return (
        <div className='page-footer indigo darken-3'>
            <div className="container">
                <div className="row">
                    <div className="col s12 l6">
                        <h5>About Me</h5>
                        <p className='indigo-text text-lighten-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti exercitationem quisquam repudiandae tenetur. Temporibus, voluptatem cumque. Vitae, mollitia soluta optio maiores voluptatibus laboriosam iure error quam corrupti facere illo cumque!</p>
                    </div>
                    <div className="col s12 l4 offset-l2">
                        <h5>Let's connect</h5>
                        <ul>
                            <li><a href="#!" className='indigo-text text-lighten-4'>Facebook</a></li>
                            <li><a href="#!" className='indigo-text text-lighten-4'>Linked</a></li>
                            <li><a href="#!" className='indigo-text text-lighten-4'>Twitter</a></li>
                            <li><a href="#!" className='indigo-text text-lighten-4'>Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright indigo darken-4">
                <div className="container">
                        <p className='center'>Coded by Nemanja 2020</p>
                    </div>
                </div>
            </div>
    )
}

export default Footer
