import React from "react";

export default function Dashboard() {
    return (
        <div className="p-grid p-fluid dashboard">
            <div className="p-col-12 p-lg-4">
                <div className="card summary">
                    <span className="title">PH</span>
                    <span className="detail">Exit Tank</span>
                    <span className="count visitors">7.67</span>
                </div>
            </div>
            <div className="p-col-12 p-lg-4">
                <div className="card summary">
                    <span className="title">Temperature</span>
                    <span className="detail">Ambient</span>
                    <span className="count purchases">33.3º</span>
                </div>
            </div>
            <div className="p-col-12 p-lg-4">
                <div className="card summary">
                    <span className="title">Humidity</span>
                    <span className="detail">Ambient</span>
                    <span className="count revenue">35.7%</span>
                </div>
            </div>
            <div className="p-col-12 p-md-6 p-xl-3">
                <div className="highlight-box">
                    <div className="initials" style={{backgroundColor:'#007be5',color:'#00448f'}}><span>TW</span></div>
                    <div className="highlight-details ">
                        
                        <span>Treated Water</span>
                        <span className="count">125</span>
                    </div>
                </div>
            </div>
            <div className="p-col-12 p-md-6 p-xl-3">
                <div className="highlight-box">
                    <div className="initials" style={{backgroundColor:'#ef6262',color:'#a83d3b'}}><span>TI</span></div>
                    <div className="highlight-details ">
                        
                        <span>Total Issues</span>
                        <span className="count">81</span>
                    </div>
                </div>
            </div>
            <div className="p-col-12 p-md-6 p-xl-3">
                <div className="highlight-box">
                    <div className="initials" style={{backgroundColor:'#20d077',color:'#038d4a'}}><span>EP</span></div>
                    <div className="highlight-details ">
                        
                        <span>Energy Produced</span>
                        <span className="count">300W</span>
                    </div>
                </div>
            </div>
            <div className="p-col-12 p-md-6 p-xl-3">
                <div className="highlight-box">
                    <div className="initials" style={{backgroundColor:'#f9c851',color:'#b58c2b'}}><span>CI</span></div>
                    <div className="highlight-details ">
                        
                        <span>Closed Issues</span>
                        <span className="count">60</span>
                    </div>
                </div>
            </div>
        </div>
    )
}