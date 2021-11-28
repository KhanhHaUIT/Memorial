import React from 'react'
import Background from '../components/ContentHome/Background'
import DetailMemory from '../components/DetailMemory'
import Header from '../components/Header'
import {useContext, useEffect} from 'react';
import { MemorialContext } from "../contexts/MemorialContext";

export default function DetailMemorial() {
    const {
        memorialState: { memorials },
        getMemorials,
      } = useContext(MemorialContext)
    
      useEffect(() => {
        getMemorials()
      }, [])
      
    return (
        <>
        <Header/>
        <Background/>
        <DetailMemory memorials={memorials}/>
        </>
    )
}