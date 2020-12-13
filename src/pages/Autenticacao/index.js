import React, { Component, useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import api from '../../services/api';

export default function Autenticacao() {

    const [loading, setLoading] = useState(false);
    const [incidents, setIncidents] = useState([]);
    async function loadIncidents() {
        if(loading) {
            return;
        }
      const response = await api.get();
      setIncidents(response.data);
      setLoading(true);
  
  }
  
  useEffect(() => {
      loadIncidents();
  });
  
  webview = null;
  console.log(incidents.authUrl)
  const uri=incidents.authUrl;
  //const navigation = useNavigation()

  return (
        <WebView
      source={{
        uri: uri,
      }}
      
      style={{ width: "100%",  }}
    />
      )
}