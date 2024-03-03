import { useState } from "react"
import Tv from "./List/TvShows"
import metal from "./image/metal.jpg"
import gta from "./image/gta.jpg"
import call from "./image/call-of-duty.jpg"
import assassin from "./image/Assassins-Creed-.jpg"
import resident from "./image/resident-evil.jpg"
import last_of_us from "./image/last-of-us.jpg"
import god_of_war from "./image/god_of_war_.webp"
import hitman from "./image/HITMAN.webp"
import gears_of_war from "./image/Gears-of-War.jpg"
import dying_light from "./image/dying-light.jpg"
import worldwar from "./image/world-war-z.webp"
import zombiearmy from "./image/zombie-army.jpg"
import re5 from "./image/re5.jpg"
import re6 from "./image/re6.jpg"
import evil from "./image/evil.jpg"
import spider from "./image/spider-man.jpg"
import avengers from "./image/avengers.jpg"
import farcry from "./image/far-cry.jpeg"
import ghost from "./image/ghost.jpg"
import deadspace from "./image/dead-space.jpg"

// videos
import metal_video from "./videos/metal-video.mp4"
import assassin_video from "./videos/assassin-video.mp4"
import last_of_us_video from "./videos/last-of-us-video.mp4"
import world_war_z_video from "./videos/world-war-z-video.mp4"
import re7_video from "./videos/resident-evil-7-video.mp4"
import call_of_duty_video from "./videos/call-of-duty-video.mp4"
import hitman_video from "./videos/hitman-videos.mp4"
import re5_video from "./videos/re5-video.mp4"
import re6_video from "./videos/re6-video.mp4"
import zombie_army_video from "./videos/zombie-army-video.mp4"
import gears_of_war_video from "./videos/gears-of-war-video.mp4"
import gtav_video from "./videos/gta-v-video.mp4"
import gow_video from "./videos/gof-video.mp4"
import far_cry_vidoe from "./videos/far-cry-video.mp4"
import dying_light_video from "./videos/dying-light-video.mp4"
import dead_space_video from "./videos/dead-space-video.mp4"
import avengers_video from "./videos/avengers-video.mp4"
import ghost_video from "./videos/call-of-duty-ghots-video.mp4"
import spide_man_video from "./videos/spider-man-video.mp4"
import evil_video from "./videos/evil-dead-video.mp4"



function DeadSpace() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (
        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay ><source src={dead_space_video} type="video/mp4" /></video>)}

                <img src={deadspace} alt="" className="no1" />
                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p>DEAD SPACE</p>
                <p className="p2">Survival | Thriller | Shooting</p>
            </div>
        </>
    )
}

function Ghost() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (
        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay ><source src={ghost_video} type="video/mp4" /></video>)}

                <img src={ghost} alt="" className="no1" />
                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p>CALL OF DUTY GHOSTS</p>
                <p className="p2">Survival | Thriller | Shooting</p>
            </div>
        </>
    )
}

function FarCry() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (
        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay ><source src={far_cry_vidoe} type="video/mp4" /></video>)}

                <img src={farcry} alt="" className="no1" />
                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p style={{ color: "orange" }}>FAR CRY</p>
                <p className="p2">Survival | Shooting</p>
            </div>
        </>
    )
}

function Avengers() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (
        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay ><source src={avengers_video} type="video/mp4" /></video>)}

                <img src={avengers} alt="" className="no1" />
                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p>AVENGERS</p>
                <p className="p2">Action | Adventure</p>
            </div>
        </>
    )
}

function SpiderMan() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (
        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay ><source src={spide_man_video} type="video/mp4" /></video>)}
                <img src={spider} alt="" className="no1" />
                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p>SPIDER MAN</p>
                <p className="p2">Action | Adventure</p>
            </div>
        </>
    )
}

function Evil() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (
        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay ><source src={evil_video} type="video/mp4" /></video>)}

                <img src={evil} alt="" className="no1" />
                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p>EVIL DEAD</p>
                <p className="p2">Survival | Thriller | Action</p>
            </div>
        </>
    )
}

function Re6() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (
        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay ><source src={re6_video} type="video/mp4" /></video>)}

                <img src={re6} alt="" className="no1" />
                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p>RESIDENT EVIL 6</p>
                <p className="p2">Survival | Thriller | Shooting</p>
            </div>
        </>
    )
}

function Re5() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (
        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay ><source src={re5_video} type="video/mp4" /></video>)}

                <img src={re5} alt="" className="no1" />
                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p>RESIDENT EVIL 5</p>
                <p className="p2">Survival | Thriller | Shooting</p>
            </div>
        </>
    )
}

function ZombieArmy() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (
        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay ><source src={zombie_army_video} type="video/mp4" /></video>)}

                <img src={zombiearmy} alt="" className="no1" />
                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p>ZOMBIE ARMY</p>
                <p className="p2">Survival | Thriller </p>
            </div>
        </>
    )
}


function WorldWar() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (
        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay ><source src={world_war_z_video} type="video/mp4" /></video>)}

                <img src={worldwar} alt="" className="no1" />
                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p>WORLD WAR Z</p>
                <p className="p2">Survival | Thriller | Shooting</p>
            </div>
        </>
    )
}

function DyingLight() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (
        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay ><source src={dying_light_video} type="video/mp4" /></video>)}

                <img src={dying_light} alt="" className="no1" />
                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p>DYING LIGHT 2</p>
                <p className="p2">Action | Thriller | Shooting</p>
            </div>
        </>
    )
}

function GearsOfWar() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (
        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay ><source src={gears_of_war_video} type="video/mp4" /></video>)}

                <img src={gears_of_war} alt="" className="no1" />

                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p>GEARS OF WAR</p>
                <p className="p2">Action | Thriller | Shooting</p>
            </div>
        </>
    )
}

function HItman() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (
        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay ><source src={hitman_video} type="video/mp4" /></video>)}

                <img src={hitman} alt="" className="no1" />
                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p>HITMAN</p>
                <p className="p2">Action | Survival | Shooting</p>
            </div>
        </>
    )
}

function GodOfWar() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (
        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay ><source src={gow_video} type="video/mp4" /></video>)}

                <img src={god_of_war} alt="" className="no1" />
                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p>GOD OF WAR</p>
                <p className="p2">Action | Thriller </p>
            </div>
        </>
    )
}

function LastOfUs() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (
        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay ><source src={last_of_us_video} type="video/mp4" /></video>)}

                <img src={last_of_us} alt="" className="no1" />
                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p>LAST OF US</p>
                <p className="p2">Action | Thriller | Shooting</p>
            </div>
        </>
    )
}




function Resident() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (
        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay ><source src={re7_video} type="video/mp4" /></video>)}

                <img src={resident} alt="" className="no1" />
                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p style={{ color: 'orange', fontFamily: '"Kode Mono", monospace' }}>RESIDENT EVIL</p>
                <p className="p2">Action | Thriller | Shooting</p>
            </div>
        </>
    )
}

function Assassin() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (
        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay style={{ height: "600px" }}><source src={assassin_video} type="video/mp4" /></video>)}
                <img src={assassin} alt="" className="no1" />
                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p style={{ color: 'gold' }}>ASSASSIN CREED</p>
                <p className="p2">Action | Thriller </p>
            </div>
        </>
    )
}

function Call() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }

    return (

        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay><source src={call_of_duty_video} type="video/mp4" /></video>)}
                <img src={call} alt="" className="no1" />

                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p>CALL OF DUTY</p>
                <p className="p2">Action | Thriller | Shooting</p>
            </div>
        </>
    )
}



function Metal() {

    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (


        <>

            <div className="img">
                {isPlay && (<video controls className="video" autoPlay><source src={metal_video} type="video/mp4" /></video>)}
                <img src={metal} alt="" className="no1" />
                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p>METAL GEAR SOLID</p>
                <p className="p2">Action | Thriller</p>
            </div>


        </>
    )
}


function Gta() {
    const [isPlay, setIsPlay] = useState(false)

    const play = () => {
        setIsPlay(true)
    }
    return (
        <>
            <div className="img">
                {isPlay && (<video controls className="video" autoPlay><source src={gtav_video} type="video/mp4" /></video>)}

                <img src={gta} alt="" className="no1" />
                <button className="play" onClick={play}>▶ Play</button>
                <button className="watch">Watch Later</button>
                <p style={{ color: 'orange' }}>GRAND THEFT AUTO 5</p>
                <p className="p2">Action | Survival</p>
            </div>
        </>
    )
}



export default Metal;

export { Gta, Assassin, Call, DyingLight, GearsOfWar, GodOfWar, HItman, LastOfUs, Resident, Avengers, DeadSpace, Evil, FarCry, Ghost, Re5, Re6, SpiderMan, WorldWar, ZombieArmy }
