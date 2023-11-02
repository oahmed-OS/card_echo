import { useState } from 'react'
interface CardProps {
    to: string,
    from: string,
}

export default function FancyCard(props: CardProps) {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div
            className="card"
            onMouseUp={() => setIsSelected((prevSelected) => !prevSelected)}
        >
            <div className={`card__inner ${isSelected ? "is-flipped" : ""}`}>
                <div className="card__face card__face--front">
                    <div className="card__content">
                        <div className="card__header">
                            Happy Birthday {props.to}!!
                        </div>
                    </div>
                </div>
                <div className="card__face card__face--back">
                    <div className="card__content">
                        <div className="card__body">
                            <p>
                                Happy 24<sup>th</sup> birthday Echo! Despite all the bad
                                things in Valorant, you were one of the best
                                things that happened to me and am so glad to have
                                met someone as fun and kind as you (and insanely cracked
                                ... them shots be crispy)! I hope 24
                                is filled with happiness and lots and lots of
                                aces ^-^. Can't wait for our next Valorant adventure hehe.
                            </p><br />
                            <span>
                                From: {props.from}
                            </span>
                            <div className="card__footer">
                                <a target="_blank" href="https://www.amazon.com/gp/r.html?C=23J4QFP74FONO&M=urn:rtn:msg:2023110202151061ed426d25a5464a82c5e96604d0p0na&R=B78GSY5H3438&T=C&U=https%3A%2F%2Fwww.amazon.com%2Fg%2F7GDBADPDU8P89H%3Fref_%3Dpe_906650_284786740&H=GWDQXAJ6BEOOHQPSVMUPCGI3RZEA&ref_=pe_906650_284786740">
                                    <div className="gift__banner" >

                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}