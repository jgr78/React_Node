import React from 'react';
import { Link } from 'react-router-dom'

export default () => (
    <section id="error_page">
        <div id="error_block">
            <div className="error_text">404 | Page not available</div>
            <div className="error_link">
                <Link to="/">Return to the main page</Link>
            </div>
        </div>
    </section>
)