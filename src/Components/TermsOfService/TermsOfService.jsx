import React from 'react';
import "./TermsOfService.css"

export default function TermsOfService() {

    const animateBubble = x => {
        const wrapper = document.getElementById("bubble-wrapper");
        const bubble = document.createElement("div");
    
        bubble.className = "bubble";
    
        bubble.style.left = `${x}px`;
    
        wrapper.appendChild(bubble);
    
        setTimeout(() => wrapper.removeChild(bubble), 2000);
    }
    
    window.onmousemove = e => animateBubble(e.clientX);

  return (
    <div className="mt-5 mb-5">
        <div className="offset-2 col-8 terms-sheet">
            <h1>Terms of Service</h1>
            <p className="offset-1 pb-3 col-10 terms-text">
                Welcome to Grace Note! Please read these terms carefully before using our website. By accessing or using the Grace Note website, you agree to be bound by these terms and conditions.

                Use at Your Own Risk: While Grace Note strives to provide accurate content, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information contained on the website.

                Limitation of Liability: In no event shall Grace Note or its contributors be liable for any damages whatsoever, including, without limitation, indirect, consequential, or incidental damages, arising out of the use of or inability to use the website.

                Modifications: Grace Note reserves the right to modify, suspend, or discontinue any aspect of the website at any time without prior notice.

                Governing Law: These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that jurisdiction.

                By using the Grace Note website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our website... You can still donate though!

                If you have any questions or concerns about these terms, please contact us at ButlerWilliam16@gmail.com.

            </p>
        </div>
        <div id="bubble-wrapper">
        </div>
    </div>
  )
}
