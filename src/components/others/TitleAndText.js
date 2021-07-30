import React from 'react'
import { Badge, Col } from 'reactstrap'

export const TitleAndText = ({ title, text, multy, completerow }) => {
    return (
        <Col className={completerow ? 'col-12 mb-2' : 'col-12 col-lg-6 col-xl-4 mb-2'}>
            <h5 className="mb-0">{title}</h5>
            {
                multy
                    ?
                    <p>{text.map(item => (
                        <Badge color="success" className="mr-1" pill key={item.name.length}>
                            {item.name}
                        </Badge>
                    ))}</p>
                    :
                    <p>{text}</p>
            }
        </Col>
    )
}
