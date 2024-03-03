import { useEffect, useState } from "react"
import metalpic from "../image/metal.jpg"
import gtapic from "../image/gta.jpg"
import call from "../image/call-of-duty.jpg"
import assassin from "../image/Assassins-Creed-.jpg"
import resident from "../image/resident-evil.jpg"
import last_of_us from "../image/last-of-us.jpg"
import god_of_war from "../image/god_of_war_.webp"
import hitman from "../image/HITMAN.webp"
import gears_of_war from "../image/Gears-of-War.jpg"
import dying_light from "../image/dying-light.jpg"
import Metal from "../metal"
import worldwar from "../image/world-war-z.webp"
import zombiearmy from "../image/zombie-army.jpg"
import re5 from "../image/re5.jpg"
import re6 from "../image/re6.jpg"
import evil from "../image/evil.jpg"
import spider from "../image/spider-man.jpg"
import avengers from "../image/avengers.jpg"
import farcry from "../image/far-cry.jpeg"
import ghost from "../image/ghost.jpg"
import deadspace from "../image/dead-space.jpg"
import { Gta, Assassin, Call, DyingLight, GearsOfWar, GodOfWar, HItman, LastOfUs, Resident, Avengers, DeadSpace, Evil, FarCry, Ghost, Re5, Re6, SpiderMan, WorldWar, ZombieArmy } from "../metal"
import { useNavigate } from "react-router-dom"


function Tv() {
    const [gtacheck, setGta] = useState(true);
    const [metalcheck, setMetal] = useState(false);
    const [assassincheck, setAssassin] = useState(false);
    const [callcheck, setcall] = useState(false);
    const [dyingLighcheck, setDyingLight] = useState(false);
    const [GearsofWarcheck, setGearsofWar] = useState(false);
    const [GodOfWarcheck, setGodOfWar] = useState(false);
    const [Hitmancheck, setHitman] = useState(false);
    const [LastOfUscheck, setLastOfUs] = useState(false);
    const [Residentcheck, setResident] = useState(false);
    const [avengerscheck, setAvengers] = useState(false);
    const [DeadSpacecheck, setDeadSpace] = useState(false);
    const [evilcheck, setEvil] = useState(false);
    const [farcrycheck, setFarcry] = useState(false);
    const [ghostcheck, setGhost] = useState(false);
    const [re5check, setre5] = useState(false);
    const [re6check, setre6] = useState(false);
    const [spidermancheck, setSpiderman] = useState(false);
    const [worldwarzcheck, setworldwarz] = useState(false);
    const [zombiearmycheck, setzombiearmy] = useState(false);


    const history = useNavigate();


    useEffect(() => {
        if (!localStorage.getItem("user")) {
            history("/")
        }
    }, [])

    const logout = () => {
        localStorage.removeItem('user');
        if (!localStorage.getItem("user")) {
            history("/")
        }

    }





    const showZombieArmy = () => {
        setDeadSpace(false)
        setEvil(false)
        setFarcry(false)
        setGhost(false)
        setre5(false)
        setre6(false)
        setSpiderman(false)
        setworldwarz(false)

        setcall(false)
        setMetal(false)
        setAssassin(false)
        setDyingLight(false)
        setGearsofWar(false)
        setGodOfWar(false)
        setHitman(false)
        setLastOfUs(false)
        setResident(false)
        setGta(false)
        setAvengers(false)
        setzombiearmy(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const showWorldWar = () => {
        setDeadSpace(false)
        setEvil(false)
        setFarcry(false)
        setGhost(false)
        setre5(false)
        setre6(false)
        setSpiderman(false)

        setzombiearmy(false)
        setcall(false)
        setMetal(false)
        setAssassin(false)
        setDyingLight(false)
        setGearsofWar(false)
        setGodOfWar(false)
        setHitman(false)
        setLastOfUs(false)
        setResident(false)
        setGta(false)
        setAvengers(false)
        setworldwarz(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const showspider = () => {
        setDeadSpace(false)
        setEvil(false)
        setFarcry(false)
        setGhost(false)
        setre5(false)
        setre6(false)

        setworldwarz(false)
        setzombiearmy(false)
        setcall(false)
        setMetal(false)
        setAssassin(false)
        setDyingLight(false)
        setGearsofWar(false)
        setGodOfWar(false)
        setHitman(false)
        setLastOfUs(false)
        setResident(false)
        setGta(false)
        setAvengers(false)
        setSpiderman(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }


    const showRe6 = () => {
        setDeadSpace(false)
        setEvil(false)
        setFarcry(false)
        setGhost(false)
        setre5(false)

        setSpiderman(false)
        setworldwarz(false)
        setzombiearmy(false)
        setcall(false)
        setMetal(false)
        setAssassin(false)
        setDyingLight(false)
        setGearsofWar(false)
        setGodOfWar(false)
        setHitman(false)
        setLastOfUs(false)
        setResident(false)
        setGta(false)
        setAvengers(false)
        setre6(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }


    const showre5 = () => {
        setDeadSpace(false)
        setEvil(false)
        setFarcry(false)
        setGhost(false)

        setre6(false)
        setSpiderman(false)
        setworldwarz(false)
        setzombiearmy(false)
        setcall(false)
        setMetal(false)
        setAssassin(false)
        setDyingLight(false)
        setGearsofWar(false)
        setGodOfWar(false)
        setHitman(false)
        setLastOfUs(false)
        setResident(false)
        setGta(false)
        setAvengers(false)
        setre5(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }




    const showGhost = () => {
        setDeadSpace(false)
        setEvil(false)
        setFarcry(false)

        setre5(false)
        setre6(false)
        setSpiderman(false)
        setworldwarz(false)
        setzombiearmy(false)
        setcall(false)
        setMetal(false)
        setAssassin(false)
        setDyingLight(false)
        setGearsofWar(false)
        setGodOfWar(false)
        setHitman(false)
        setLastOfUs(false)
        setResident(false)
        setGta(false)
        setAvengers(false)
        setGhost(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const showFarCry = () => {
        setDeadSpace(false)
        setEvil(false)

        setGhost(false)
        setre5(false)
        setre6(false)
        setSpiderman(false)
        setworldwarz(false)
        setzombiearmy(false)
        setcall(false)
        setMetal(false)
        setAssassin(false)
        setDyingLight(false)
        setGearsofWar(false)
        setGodOfWar(false)
        setHitman(false)
        setLastOfUs(false)
        setResident(false)
        setGta(false)
        setAvengers(false)
        setFarcry(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const showevil = () => {

        setDeadSpace(false)
        setFarcry(false)
        setGhost(false)
        setre5(false)
        setre6(false)
        setSpiderman(false)
        setworldwarz(false)
        setzombiearmy(false)
        setcall(false)
        setMetal(false)
        setAssassin(false)
        setDyingLight(false)
        setGearsofWar(false)
        setGodOfWar(false)
        setHitman(false)
        setLastOfUs(false)
        setResident(false)
        setGta(false)
        setAvengers(false)
        setEvil(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const showDeadspace = () => {

        setEvil(false)
        setFarcry(false)
        setGhost(false)
        setre5(false)
        setre6(false)
        setSpiderman(false)
        setworldwarz(false)
        setzombiearmy(false)
        setcall(false)
        setMetal(false)
        setAssassin(false)
        setDyingLight(false)
        setGearsofWar(false)
        setGodOfWar(false)
        setHitman(false)
        setLastOfUs(false)
        setResident(false)
        setGta(false)
        setAvengers(false)
        setDeadSpace(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const showAvengers = () => {

        setDeadSpace(false)
        setEvil(false)
        setFarcry(false)
        setGhost(false)
        setre5(false)
        setre6(false)
        setSpiderman(false)
        setworldwarz(false)
        setzombiearmy(false)
        setcall(false)
        setMetal(false)
        setAssassin(false)
        setDyingLight(false)
        setGearsofWar(false)
        setGodOfWar(false)
        setHitman(false)
        setLastOfUs(false)
        setResident(false)
        setGta(false)
        setAvengers(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const showGta = () => {
        setAvengers(false)
        setDeadSpace(false)
        setEvil(false)
        setFarcry(false)
        setGhost(false)
        setre5(false)
        setre6(false)
        setSpiderman(false)
        setworldwarz(false)
        setzombiearmy(false)
        setcall(false)
        setMetal(false)
        setAssassin(false)
        setDyingLight(false)
        setGearsofWar(false)
        setGodOfWar(false)
        setHitman(false)
        setLastOfUs(false)
        setResident(false)
        setGta(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })

    }

    const showMetal = () => {
        setAvengers(false)
        setDeadSpace(false)
        setEvil(false)
        setFarcry(false)
        setGhost(false)
        setre5(false)
        setre6(false)
        setSpiderman(false)
        setworldwarz(false)
        setzombiearmy(false)
        setcall(false)
        setAssassin(false)
        setDyingLight(false)
        setGearsofWar(false)
        setGodOfWar(false)
        setHitman(false)
        setLastOfUs(false)
        setResident(false)
        setGta(false)
        setMetal(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const showAssassin = () => {
        setAvengers(false)
        setDeadSpace(false)
        setEvil(false)
        setFarcry(false)
        setGhost(false)
        setre5(false)
        setre6(false)
        setSpiderman(false)
        setworldwarz(false)
        setzombiearmy(false)
        setcall(false)
        setDyingLight(false)
        setGearsofWar(false)
        setGodOfWar(false)
        setHitman(false)
        setLastOfUs(false)
        setResident(false)
        setGta(false)
        setMetal(false)
        setAssassin(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const showDyingLight = () => {
        setAvengers(false)
        setDeadSpace(false)
        setEvil(false)
        setFarcry(false)
        setGhost(false)
        setre5(false)
        setre6(false)
        setSpiderman(false)
        setworldwarz(false)
        setzombiearmy(false)
        setcall(false)
        setGearsofWar(false)
        setGodOfWar(false)
        setHitman(false)
        setLastOfUs(false)
        setResident(false)
        setGta(false)
        setMetal(false)
        setAssassin(false)
        setDyingLight(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const showGearsOfWar = () => {
        setAvengers(false)
        setDeadSpace(false)
        setEvil(false)
        setFarcry(false)
        setGhost(false)
        setre5(false)
        setre6(false)
        setSpiderman(false)
        setworldwarz(false)
        setzombiearmy(false)
        setcall(false)
        setGodOfWar(false)
        setHitman(false)
        setLastOfUs(false)
        setResident(false)
        setGta(false)
        setMetal(false)
        setAssassin(false)
        setDyingLight(false)
        setGearsofWar(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const showGodOfWar = () => {
        setAvengers(false)
        setDeadSpace(false)
        setEvil(false)
        setFarcry(false)
        setGhost(false)
        setre5(false)
        setre6(false)
        setSpiderman(false)
        setworldwarz(false)
        setzombiearmy(false)
        setcall(false)
        setHitman(false)
        setLastOfUs(false)
        setResident(false)
        setGta(false)
        setMetal(false)
        setAssassin(false)
        setDyingLight(false)
        setGearsofWar(false)
        setGodOfWar(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const showHitman = () => {
        setAvengers(false)
        setDeadSpace(false)
        setEvil(false)
        setFarcry(false)
        setGhost(false)
        setre5(false)
        setre6(false)
        setSpiderman(false)
        setworldwarz(false)
        setzombiearmy(false)
        setcall(false)
        setLastOfUs(false)
        setResident(false)
        setGta(false)
        setMetal(false)
        setAssassin(false)
        setDyingLight(false)
        setGearsofWar(false)
        setGodOfWar(false)
        setHitman(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const showLastOfUs = () => {
        setAvengers(false)
        setDeadSpace(false)
        setEvil(false)
        setFarcry(false)
        setGhost(false)
        setre5(false)
        setre6(false)
        setSpiderman(false)
        setworldwarz(false)
        setzombiearmy(false)
        setcall(false)
        setResident(false)
        setGta(false)
        setMetal(false)
        setAssassin(false)
        setDyingLight(false)
        setGearsofWar(false)
        setGodOfWar(false)
        setHitman(false)
        setLastOfUs(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const showResident = () => {
        setAvengers(false)
        setDeadSpace(false)
        setEvil(false)
        setFarcry(false)
        setGhost(false)
        setre5(false)
        setre6(false)
        setSpiderman(false)
        setworldwarz(false)
        setzombiearmy(false)
        setcall(false)
        setGta(false)
        setMetal(false)
        setAssassin(false)
        setDyingLight(false)
        setGearsofWar(false)
        setGodOfWar(false)
        setHitman(false)
        setLastOfUs(false)
        setResident(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const showCall = () => {
        setAvengers(false)
        setDeadSpace(false)
        setEvil(false)
        setFarcry(false)
        setGhost(false)
        setre5(false)
        setre6(false)
        setSpiderman(false)
        setworldwarz(false)
        setzombiearmy(false)
        setGta(false)
        setMetal(false)
        setAssassin(false)
        setDyingLight(false)
        setGearsofWar(false)
        setGodOfWar(false)
        setHitman(false)
        setLastOfUs(false)
        setResident(false)
        setcall(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }


    const [serachText, setSearchText] = useState('')

    const searching = () => {
        // alert(serachText)
        const threeletter = serachText.substring(0, 3)


        switch (threeletter) {
            case 'gta':
                setAvengers(false)
                setDeadSpace(false)
                setEvil(false)
                setFarcry(false)
                setGhost(false)
                setre5(false)
                setre6(false)
                setSpiderman(false)
                setworldwarz(false)
                setzombiearmy(false)
                setcall(false)
                setDyingLight(false)
                setGearsofWar(false)
                setGodOfWar(false)
                setHitman(false)
                setLastOfUs(false)
                setResident(false)

                setMetal(false)
                setAssassin(false)
                setGta(true)
                break;
            case 'met':
                setAvengers(false)
                setDeadSpace(false)
                setEvil(false)
                setFarcry(false)
                setGhost(false)
                setre5(false)
                setre6(false)
                setSpiderman(false)
                setworldwarz(false)
                setzombiearmy(false)
                setGta(false)

                setAssassin(false)
                setDyingLight(false)
                setGearsofWar(false)
                setGodOfWar(false)
                setHitman(false)
                setLastOfUs(false)
                setResident(false)
                setcall(false)
                setMetal(true)

                break;


            case 'cal':
                setAvengers(false)
                setDeadSpace(false)
                setEvil(false)
                setFarcry(false)
                setGhost(false)
                setre5(false)
                setre6(false)
                setSpiderman(false)
                setworldwarz(false)
                setzombiearmy(false)
                setGta(false)
                setMetal(false)
                setAssassin(false)
                setDyingLight(false)
                setGearsofWar(false)
                setGodOfWar(false)
                setHitman(false)
                setLastOfUs(false)
                setResident(false)
                setcall(true)

                break;


            case 'las':
                setAvengers(false)
                setDeadSpace(false)
                setEvil(false)
                setFarcry(false)
                setGhost(false)
                setre5(false)
                setre6(false)
                setSpiderman(false)
                setworldwarz(false)
                setzombiearmy(false)
                setcall(false)
                setResident(false)
                setGta(false)
                setMetal(false)
                setAssassin(false)
                setDyingLight(false)
                setGearsofWar(false)
                setGodOfWar(false)
                setHitman(false)
                setLastOfUs(true)
                break;
            case 'god':
                setAvengers(false)
                setDeadSpace(false)
                setEvil(false)
                setFarcry(false)
                setGhost(false)
                setre5(false)
                setre6(false)
                setSpiderman(false)
                setworldwarz(false)
                setzombiearmy(false)
                setcall(false)
                setHitman(false)
                setLastOfUs(false)
                setResident(false)
                setGta(false)
                setMetal(false)
                setAssassin(false)
                setDyingLight(false)
                setGearsofWar(false)
                setGodOfWar(true)
                break;
            case 'hit':
                setAvengers(false)
                setDeadSpace(false)
                setEvil(false)
                setFarcry(false)
                setGhost(false)
                setre5(false)
                setre6(false)
                setSpiderman(false)
                setworldwarz(false)
                setzombiearmy(false)
                setcall(false)
                setLastOfUs(false)
                setResident(false)
                setGta(false)
                setMetal(false)
                setAssassin(false)
                setDyingLight(false)
                setGearsofWar(false)
                setGodOfWar(false)
                setHitman(true)
                break;
            case 'gea':
                setAvengers(false)
                setDeadSpace(false)
                setEvil(false)
                setFarcry(false)
                setGhost(false)
                setre5(false)
                setre6(false)
                setSpiderman(false)
                setworldwarz(false)
                setzombiearmy(false)
                setcall(false)
                setGodOfWar(false)
                setHitman(false)
                setLastOfUs(false)
                setResident(false)
                setGta(false)
                setMetal(false)
                setAssassin(false)
                setDyingLight(false)
                setGearsofWar(true)
                break;
            case 'dyi':
                setAvengers(false)
                setDeadSpace(false)
                setEvil(false)
                setFarcry(false)
                setGhost(false)
                setre5(false)
                setre6(false)
                setSpiderman(false)
                setworldwarz(false)
                setzombiearmy(false)
                setcall(false)
                setGearsofWar(false)
                setGodOfWar(false)
                setHitman(false)
                setLastOfUs(false)
                setResident(false)
                setGta(false)
                setMetal(false)
                setAssassin(false)
                setDyingLight(true)
                break;
            case 'wor':
                setAvengers(false)
                setDeadSpace(false)
                setEvil(false)
                setFarcry(false)
                setGhost(false)
                setre5(false)
                setre6(false)
                setSpiderman(false)

                setzombiearmy(false)
                setGta(false)
                setMetal(false)
                setAssassin(false)
                setDyingLight(false)
                setGearsofWar(false)
                setGodOfWar(false)
                setHitman(false)
                setLastOfUs(false)
                setResident(false)
                setcall(false)
                setworldwarz(true)

                break;


            case 'zom':
                setAvengers(false)
                setDeadSpace(false)
                setEvil(false)
                setFarcry(false)
                setGhost(false)
                setre5(false)
                setre6(false)
                setSpiderman(false)
                setworldwarz(false)

                setGta(false)
                setMetal(false)
                setAssassin(false)
                setDyingLight(false)
                setGearsofWar(false)
                setGodOfWar(false)
                setHitman(false)
                setLastOfUs(false)
                setResident(false)
                setcall(false)
                setzombiearmy(true)

                break;

            case 're5':
                setAvengers(false)
                setDeadSpace(false)
                setEvil(false)
                setFarcry(false)
                setGhost(false)

                setre6(false)
                setSpiderman(false)
                setworldwarz(false)
                setzombiearmy(false)
                setGta(false)
                setMetal(false)
                setAssassin(false)
                setDyingLight(false)
                setGearsofWar(false)
                setGodOfWar(false)
                setHitman(false)
                setLastOfUs(false)
                setResident(false)
                setcall(false)
                setre5(true)

                break;
            case 'ass':
                setAvengers(false)
                setDeadSpace(false)
                setEvil(false)
                setFarcry(false)
                setGhost(false)
                setre5(false)
                setre6(false)
                setSpiderman(false)
                setworldwarz(false)
                setzombiearmy(false)
                setcall(false)
                setDyingLight(false)
                setGearsofWar(false)
                setGodOfWar(false)
                setHitman(false)
                setLastOfUs(false)
                setResident(false)
                setGta(false)
                setMetal(false)
                setAssassin(true)
                break;
            case 'res':
                setAvengers(false)
                setDeadSpace(false)
                setEvil(false)
                setFarcry(false)
                setGhost(false)
                setre5(false)
                setre6(false)
                setSpiderman(false)
                setworldwarz(false)
                setzombiearmy(false)
                setcall(false)
                setGta(false)
                setMetal(false)
                setAssassin(false)
                setDyingLight(false)
                setGearsofWar(false)
                setGodOfWar(false)
                setHitman(false)
                setLastOfUs(false)
                setResident(true)
                break;
            case 're6':
                setAvengers(false)
                setDeadSpace(false)
                setEvil(false)
                setFarcry(false)
                setGhost(false)
                setre5(false)

                setSpiderman(false)
                setworldwarz(false)
                setzombiearmy(false)
                setcall(false)
                setGta(false)
                setMetal(false)
                setAssassin(false)
                setDyingLight(false)
                setGearsofWar(false)
                setGodOfWar(false)
                setHitman(false)
                setLastOfUs(false)
                setResident(false)
                setre6(true)

                break;
            case 'evi':
                setAvengers(false)
                setDeadSpace(false)

                setFarcry(false)
                setGhost(false)
                setre5(false)
                setre6(false)
                setSpiderman(false)
                setworldwarz(false)
                setzombiearmy(false)
                setcall(false)
                setGta(false)
                setMetal(false)
                setAssassin(false)
                setDyingLight(false)
                setGearsofWar(false)
                setGodOfWar(false)
                setHitman(false)
                setLastOfUs(false)
                setResident(false)
                setEvil(true)

                break;
            case 'spi':
                setAvengers(false)
                setDeadSpace(false)
                setEvil(false)
                setFarcry(false)
                setGhost(false)
                setre5(false)
                setre6(false)

                setworldwarz(false)
                setzombiearmy(false)
                setcall(false)
                setGta(false)
                setMetal(false)
                setAssassin(false)
                setDyingLight(false)
                setGearsofWar(false)
                setGodOfWar(false)
                setHitman(false)
                setLastOfUs(false)
                setResident(false)
                setSpiderman(true)
                break;
            case 'gho':
                setAvengers(false)
                setDeadSpace(false)
                setEvil(false)
                setFarcry(false)

                setre5(false)
                setre6(false)
                setSpiderman(false)
                setworldwarz(false)
                setzombiearmy(false)
                setcall(false)
                setGta(false)
                setMetal(false)
                setAssassin(false)
                setDyingLight(false)
                setGearsofWar(false)
                setGodOfWar(false)
                setHitman(false)
                setLastOfUs(false)
                setResident(false)
                setGhost(true)
                break;
            case 'ave':

                setDeadSpace(false)
                setEvil(false)
                setFarcry(false)
                setGhost(false)
                setre5(false)
                setre6(false)
                setSpiderman(false)
                setworldwarz(false)
                setzombiearmy(false)
                setcall(false)
                setGta(false)
                setMetal(false)
                setAssassin(false)
                setDyingLight(false)
                setGearsofWar(false)
                setGodOfWar(false)
                setHitman(false)
                setLastOfUs(false)
                setResident(false)
                setAvengers(true)
                break;
            case 'dea':
                setAvengers(false)

                setEvil(false)
                setFarcry(false)
                setGhost(false)
                setre5(false)
                setre6(false)
                setSpiderman(false)
                setworldwarz(false)
                setzombiearmy(false)
                setcall(false)
                setGta(false)
                setMetal(false)
                setAssassin(false)
                setDyingLight(false)
                setGearsofWar(false)
                setGodOfWar(false)
                setHitman(false)
                setLastOfUs(false)
                setResident(false)
                setDeadSpace(true)
                break;
            case 'far':
                setAvengers(false)
                setDeadSpace(false)
                setEvil(false)

                setGhost(false)
                setre5(false)
                setre6(false)
                setSpiderman(false)
                setworldwarz(false)
                setzombiearmy(false)
                setcall(false)
                setGta(false)
                setMetal(false)
                setAssassin(false)
                setDyingLight(false)
                setGearsofWar(false)
                setGodOfWar(false)
                setHitman(false)
                setLastOfUs(false)
                setResident(false)
                setFarcry(true)
                break;


            default:

                break;
        }
    }

    const enterClick = (e) => {
        if (e.key == 'Enter') {
            searching();
            setSearchText("")
        }
    }







    return (
        <>
            {/* Avengers, DeadSpace, Evil, FarCry, Ghost, Re5, Re6, SpiderMan, WorldWar, ZombieArmy */}
            {gtacheck && <Gta />}
            {metalcheck && <Metal />}
            {callcheck && <Call />}
            {assassincheck && <Assassin />}
            {Residentcheck && <Resident />}
            {LastOfUscheck && <LastOfUs />}
            {Hitmancheck && <HItman />}
            {GodOfWarcheck && <GodOfWar />}
            {GearsofWarcheck && <GearsOfWar />}
            {dyingLighcheck && <DyingLight />}
            {avengerscheck && <Avengers />}
            {DeadSpacecheck && <DeadSpace />}
            {evilcheck && <Evil />}
            {farcrycheck && <FarCry />}
            {ghostcheck && <Ghost />}
            {re5check && <Re5 />}
            {re6check && <Re6 />}
            {spidermancheck && <SpiderMan />}
            {worldwarzcheck && <WorldWar />}
            {zombiearmycheck && <ZombieArmy />}


            <h1 className="tv-head">Popular</h1>
            <input type="text" className="search" onKeyPress={enterClick} placeholder="Search..." value={serachText} onChange={(e) => { setSearchText(e.target.value) }} />
            <button className="search-icon" onClick={searching}>🔎︎</button>
            <button className="logout" onClick={logout}>Log out</button>

            <div className="tv">

                <div >
                    <img src={metalpic} alt="" onClick={showMetal} />
                </div>

                <div >
                    <img src={gtapic} alt="" onClick={showGta} />
                </div>
                <div>
                    <img src={call} alt="" onClick={showCall} />
                </div>
                <div>
                    <img src={assassin} alt="" onClick={showAssassin} />
                </div>
                <div>
                    <img src={resident} alt="" onClick={showResident} />
                </div>




            </div>
            <div className="tv1">
                <div >
                    <img src={last_of_us} alt="" onClick={showLastOfUs} />
                </div>

                <div >
                    <img src={god_of_war} alt="" onClick={showGodOfWar} />
                </div>
                <div>
                    <img src={hitman} alt="" onClick={showHitman} />
                </div>

                <div>
                    <img src={gears_of_war} alt="" onClick={showGearsOfWar} />
                </div>
                <div>
                    <img src={dying_light} alt="" onClick={showDyingLight} />
                </div>

            </div>
            <h1 className="tv-head2">Thriller and Zombie</h1>

            <div className="tv2">
                <div>
                    <img src={worldwar} alt="" onClick={showWorldWar} />
                </div>
                <div>
                    <img src={zombiearmy} alt="" onClick={showZombieArmy} />
                </div>
                <div>
                    <img src={re5} alt="" onClick={showre5} />
                </div>
                <div>
                    <img src={re6} alt="" onClick={showRe6} />
                </div>
                <div>
                    <img src={evil} alt="" onClick={showevil} />
                </div>
            </div>

            <h1 className="tv-head3">Action</h1>
            <div className="tv3">
                <div>
                    <img src={spider} alt="" onClick={showspider} />
                </div>
                <div>
                    <img src={ghost} alt="" onClick={showGhost} />
                </div>
                <div>
                    <img src={avengers} alt="" onClick={showAvengers} />
                </div>
                <div>
                    <img src={deadspace} alt="" onClick={showDeadspace} />
                </div>
                <div>
                    <img src={farcry} alt="" onClick={showFarCry} />
                </div>


            </div>
        </>
    )
}

export default Tv