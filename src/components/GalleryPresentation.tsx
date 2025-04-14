// STYLES
import './GalleryPresentation.scss'

//IMPORTS
import { useEffect, useRef } from "react";
import { useState } from 'react';
import FileSaver from 'file-saver'
import JSZip from "jszip";
import {gsap} from 'gsap';
import { horizontalLoop } from '../components/GalleryHelper.ts'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
interface UnzippedGroupOfPictures {
    title: String;
    buffers: String[];
  }

export default function GalleryPresentation(props: {pictures: Array<UnzippedGroupOfPictures>, name:string})
{
    function getMaxPhotoIndex(){
        var counter = 0;
        props.pictures.forEach(element => {
            counter += element.buffers.length;
        });
        return counter;
    }

    function getMap(){
        var counter = 0;
        var map = new Map<number, string>();
        props.pictures.forEach(element => {
            element.buffers.forEach(buffer => {
                map.set(counter, element.title.toString());
                counter++;
            });
        })
        return map;
    }
    
    function getAllPictures(){
        var arrayOfPictures: Array<String> = [];
        props.pictures.forEach((element) => {
            arrayOfPictures = [...arrayOfPictures, ...element.buffers];
        })
        return arrayOfPictures;
    }

    function setArrayofTeams(){
        const directions = new Set<string>();
        props.pictures.map((item) => directions.add(item.title.toString()));
        return Array.from(directions);
    }

    const maxPhotoIndex = getMaxPhotoIndex();
    const mapOfPictures = getMap();
    const allPictures = getAllPictures();
    const mainPhoto = useRef(null);
    const secondaryMainPhoto = useRef(null);
    const secondaryLeftPhoto = useRef(null);
    const secondaryRightPhoto = useRef(null);
    const arrayOfTeams:Array<string> = setArrayofTeams();
    let setWidth;
    if(props.pictures.length > 2){
        setWidth = 33;
    }else if(props.pictures.length == 2){
        setWidth = 50;
    }else{
        setWidth = 100;
    }
    const arrayOfDivsOfTeams:Array<JSX.Element> = setArrayOfDivsOfTeams(setWidth);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [teamName, setTeamName] = useState(mapOfPictures.get(0));
    const [teamIndex, setTeamIndex] = useState(0);
    const teamsRefs = useRef<(HTMLDivElement)[]>([]);
    let isShort = props.pictures.length < 4 ? true : false;
    

    function setArrayOfDivsOfTeams(width:number){
        let array:Array<JSX.Element> = [];
        let heading = <div className='team' style={{width:(width+"%")}}><h2 className='gallery-presentation-mobile-team-left' ref={(element) => {if(element !== null) teamsRefs.current[0] = element}} onClick={() => {moveToTeam(arrayOfTeams[arrayOfTeams.length - 1],isShort); props.pictures.length < 4 && setTeamIndex(0)}}>{arrayOfTeams[arrayOfTeams.length - 1]}</h2></div>;
        array = [...array, heading];
        arrayOfTeams.forEach((team, index) => {
            let heading = <div className='team' style={{width:(width+"%")}}><h2 className='gallery-presentation-mobile-team-left' ref={(element) => {if(element !== null) teamsRefs.current[index+1] = element}} onClick={() => {moveToTeam(team, isShort); props.pictures.length < 4 && setTeamIndex(index+1)}}>{team}</h2></div>;
            if(index == arrayOfTeams.length - 1)
                return;
            if(index == 0)
                heading = <div className='team' style={{width:(width+"%")}}><h2 className='gallery-presentation-mobile-team-center' ref={(element) => {if(element !== null) teamsRefs.current[index+1] = element}} onClick={() => {props.pictures.length < 4 && setTeamIndex(index+1); moveToTeam(team, isShort)}}>{team}</h2></div>;
            array = [...array,heading];
        });
        return array;
    }

    let loop = useRef<gsap.core.Timeline>();

    function moveToLeft(){
        if(photoIndex > 0)
        {
            setPhotoIndex(photoIndex - 1);
            let tempPhotoIndex = photoIndex;
            setTeamName(mapOfPictures.get(photoIndex - 1));
            if(mapOfPictures.get(tempPhotoIndex) != mapOfPictures.get(tempPhotoIndex - 1) && !isShort)
                leftAnimation(false);
            if(isShort)
                changeStyles(mapOfPictures.get(tempPhotoIndex - 1));
            return;
        }
        if(!isShort)
            leftAnimation(false);
        if(isShort)
            changeStyles(mapOfPictures.get(maxPhotoIndex - 1));
        setPhotoIndex(maxPhotoIndex - 1);
        setTeamName(mapOfPictures.get(maxPhotoIndex - 1));
    }

    function moveToRight(){
        if(photoIndex < maxPhotoIndex - 1)
        {
            setPhotoIndex(photoIndex + 1);
            setTeamName(mapOfPictures.get(photoIndex + 1));
            if(mapOfPictures.get(photoIndex) != mapOfPictures.get(photoIndex + 1) && !isShort)
                rightAnimation();
            if(isShort)
                changeStyles(mapOfPictures.get(photoIndex + 1));
            return;
        }
        if(!isShort)
            rightAnimation();
        if(isShort)
            changeStyles(mapOfPictures.get(0));
        setPhotoIndex(0);
        setTeamName(mapOfPictures.get(0));
    }

    function dataURItoBlob(dataURI:string) {
        var byteString = atob(dataURI.split(',')[1]);
      
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      
        var ab = new ArrayBuffer(byteString.length);
      
        var ia = new Uint8Array(ab);
      
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
      
        var blob = new Blob([ab], {type: mimeString});
        return blob;  
    }

    function downloadImage(){
        FileSaver.saveAs(dataURItoBlob("data:image/png;base64,"+allPictures[photoIndex].toString()), 'image.png');
    }

    function getIndexByTeamName(name:string | undefined){
        return teamsRefs.current.findIndex(item => item.textContent == name);
    }

    function moveToTeam(teamName:string | undefined, change:boolean){
        if(change){
            teamsRefs.current.forEach((item) => item.className = 'gallery-presentation-mobile-team-left');
            teamsRefs.current[getIndexByTeamName(teamName)].className = 'gallery-presentation-mobile-team-center';
        }
        for(var i=0;i<mapOfPictures.size;i++)
        {
            if(mapOfPictures.get(i)! == teamName)
            {
                setTeamName(teamName);
                setPhotoIndex(i);
                return;
            }
        }
        setPhotoIndex(0);
    }
    useEffect(() => {
        const ctx = gsap.context(() => {});
        ctx.add(() => {
          gsap.from(".gallery-presentation-main-photo", {
            opacity: .9
          });
        });
    
        return () => {
          ctx.revert();
        };
      }, [teamName, photoIndex]);

      let array:any = [];
      let isSet = false;

      useEffect(() => {
        if(gsap.utils.toArray('.team').length > 0 && !isSet){
            array = gsap.utils.toArray('.team');
            loop.current = horizontalLoop(
                array, {paused: true});
            isSet = true;
        }
      }, []);
    
      function rightAnimation(){
        setTeamIndex(teamIndex < (arrayOfTeams.length - 1) ? (teamIndex + 1) : 0);
        let tempIndex = teamIndex < (arrayOfTeams.length - 1) ? (teamIndex + 1) : 0;
        loop.current?.next({ duration: 0.5, ease: "power2.out" });
        teamsRefs.current[tempIndex < (arrayOfTeams.length - 1) ? tempIndex + 1 : 0].className = 'gallery-presentation-mobile-team-center';
        teamsRefs.current[tempIndex].className = 'gallery-presentation-mobile-team-left';
        moveToTeam(teamsRefs.current[tempIndex < (arrayOfTeams.length - 1) ? tempIndex + 1 : 0].textContent!, false);
      }

      function leftAnimation(goToTeam:boolean){
        setTeamIndex(teamIndex > 0 ? (teamIndex - 1) : arrayOfTeams.length - 1);
        let tempIndex = teamIndex > 0 ? (teamIndex - 1) : arrayOfTeams.length - 1;
        loop.current?.previous({ duration: 0.5, ease: "power2.out" });
        teamsRefs.current[tempIndex < arrayOfTeams.length - 1 ? tempIndex + 1 : 0].className = 'gallery-presentation-mobile-team-center';
        teamsRefs.current[tempIndex > 1 ? tempIndex - 2 : arrayOfTeams.length - 1 - (1 - tempIndex)].className = 'gallery-presentation-mobile-team-left';
        if(goToTeam)
            moveToTeam(teamsRefs.current[tempIndex < arrayOfTeams.length - 1 ? tempIndex + 1 : 0].textContent!, false);
    }

    async function downloadFolder(){
        const zip = new JSZip();
        for (var i = 0; i < maxPhotoIndex; i++) {
            const blob = dataURItoBlob("data:image/png;base64,"+allPictures[i].toString());
            zip.file((i+1).toString()+".png",blob);
        }
        const zipData = await zip.generateAsync({
            type: "blob",
            streamFiles: true,
        });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(zipData);
        link.download = props.name.toLowerCase().replaceAll(' ','-')+".zip";
        link.click();
    }

    function changeStyles(name:string | undefined){
        teamsRefs.current.forEach((item) => item.className = 'gallery-presentation-mobile-team-left');
        teamsRefs.current[getIndexByTeamName(name)].className = 'gallery-presentation-mobile-team-center';
    }

    function Teams(){
        if(props.pictures.length > 3){
            return (<><button style={{position:'absolute', height:'24px', top:'5px', left:0, width:'33%', opacity:0, zIndex:9999999}} onClick={() => leftAnimation(true)}>w lewo</button>
            <button style={{position:'absolute', height:'24px', top:'5px', right:0, width:'33%', opacity:0, zIndex:9999999}} onClick={() => rightAnimation()}>w prawo</button>
            {
                arrayOfDivsOfTeams.map((item, index) => { return item})
            }
        </>)
        }
        return (
            arrayOfDivsOfTeams.map((item, index) => { return item})
        );
    }

    return (
        <>
        <section className='gallery-presentation'>
            <section className='gallery-presentation-main'>
                <ul className='gallery-presentation-main-list'>
                    {props.pictures.map((team) => <li key={team.title.toString()} className={teamName == team.title.toString() ? "gallery-presentation-main-list-selected" : "gallery-presentation-main-list-not-selected"} id={team.title.toString()} onClick={() => moveToTeam(team.title.toString(), false)}>{team.title}</li>)}
                </ul>
                <Zoom><img className='gallery-presentation-main-photo' ref={mainPhoto} src={`${`data:image/png;base64,${allPictures[photoIndex]}`}`} /></Zoom>
            </section>
            <section className='gallery-presentation-buttons'>
                <button className='gallery-presentation-buttons-button' onClick={() => moveToLeft()}>
                    <a>&lt;</a>
                </button>
                <button className='gallery-presentation-buttons-button' onClick={() => downloadImage()}>
                    <a>Pobierz Zdjęcie</a>
                </button>
                <button className='gallery-presentation-buttons-button' onClick={() => moveToRight()}>
                    <a >&gt;</a>
                </button>
            </section>
            <section className='gallery-presentation-secondary-photos'>
                <img className='gallery-presentation-secondary-photos-secondary-photo' ref={secondaryLeftPhoto} src={`${`data:image/png;base64,${allPictures[photoIndex - 1 >= 0 ? (photoIndex - 1) : maxPhotoIndex - 1]}`}`} />
                <img className='gallery-presentation-secondary-photos-main-photo' ref={secondaryMainPhoto} src={`${`data:image/png;base64,${allPictures[photoIndex]}`}`} />
                <img className='gallery-presentation-secondary-photos-secondary-photo' ref={secondaryRightPhoto} src={`${`data:image/png;base64,${allPictures[photoIndex + 1 <= maxPhotoIndex - 1 ? (photoIndex + 1) : 0]}`}`} />
            </section>
            <section className='gallery-presentation-text'>
                <p>{photoIndex+1}/{maxPhotoIndex}</p>
                <p onClick={() => downloadFolder()}>Pobierz Album</p>
            </section>
        </section>


        <section className='gallery-presentation-mobile'>
            <section className='gallery-presentation-mobile-main'>
                <Zoom><img className='gallery-presentation-mobile-main-photo' ref={mainPhoto} src={`${`data:image/png;base64,${allPictures[photoIndex]}`}`} /></Zoom>
            </section>
            <section className='gallery-presentation-mobile-buttons'>
                <button className='gallery-presentation-buttons-button' onClick={() => moveToLeft()}>
                    <a>&lt;</a>
                </button>
                <button className='gallery-presentation-buttons-button' onClick={() => downloadImage()}>
                    <a>Pobierz Zdjęcie</a>
                </button>
                <button className='gallery-presentation-buttons-button' onClick={() => moveToRight()}>
                    <a >&gt;</a>
                </button>
            </section>
            <section className='gallery-presentation-mobile-team'>
                {Teams()}
            </section>
        </section>
    </>
    )
}