import React from 'react';
import Swal from "sweetalert2";

function getMobileOS() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        alert("Windows Phone");
    } else if (/android/i.test(userAgent)) {
        window.open("https://play.google.com/store/apps/details?id=com.asia_proo_teknologi");
    } // iOS detection from: http://stackoverflow.com/a/9039885/177710
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        Swal.fire({
            title: "Coming Soon !",
            icon: "warning",
            text: "Belum Tersedia di iPhone"
        });
    } else {
        window.open("https://play.google.com/store/apps/details?id=com.asia_proo_teknologi");
    }
}

export default getMobileOS;