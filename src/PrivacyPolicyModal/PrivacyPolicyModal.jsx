import React from 'react';
import modalCss from './PrivacyPolicyModal.module.css';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    const contentStyle = {
        color: '#fff'
    };

    return (
        <div className={modalCss.modalOverlay} onClick={onClose}>
            <div
                className={modalCss.modalContent}
                onClick={e => e.stopPropagation()}
                style={{ backgroundColor: '#333' }}
            >
                <div className={modalCss.modalBody} style={contentStyle}>

                    <h1>Privacy Policy</h1>
                    <p>Last updated: November 25, 2025</p>
                    <p>
                        VENENA MARKETING SERVICES - FZCO (“Company”, “We”, “Us”, “Our”) is a company incorporated in a UAE Free Zone (FZCO registration), with its registered office at Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates, UAE.
                    </p>
                    <p>
                        We provide IT consultancy, marketing, engineering & design, and project management services.
                    </p>
                    <p>
                        We act as a data controller under the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL) regarding personal data collected through this Website.
                    </p>

                    <h3>Purpose of This Privacy Policy</h3>
                    <p>
                        Our Website is primarily informational. We do not use cookies, analytics, or tracking technologies, except where necessary for functionality. We only collect personal data if voluntarily provided by You (e.g., via the contact form or email).
                    </p>

                    <h3>Data We Collect</h3>
                    <p>
                        Мы не профилируем посетителей и не собираем данные для маркетинговых целей.
                    </p>
                    <table className={modalCss.table}>
                        <thead>
                            <tr>
                                <th>Data type</th>
                                <th>Source</th>
                                <th>Purpose</th>
                                <th>Retention Period</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name, email, message details</td>
                                <td>Voluntarily provided by You</td>
                                <td>To respond to inquiries</td>
                                <td>1 year, unless otherwise required by UAE law</td>
                            </tr>
                            <tr>
                                <td>Technical logs</td>
                                <td>Automatically recorded by hosting provider</td>
                                <td>Security and operational purposes</td>
                                <td>1 year, unless otherwise required by UAE law</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Legal Basis for Processing</h3>
                    <p>
                        We process personal data based on legitimate interest (responding to inquiries and ensuring website security), compliance with UAE PDPL, or consent where applicable.
                    </p>

                    <h3>Data Subject Rights</h3>
                    <ul>
                        <li>Under the UAE PDPL, You have the right to access, correct, erase, restrict, or object to the processing of your personal data.</li>
                        <li>You may also request data portability or withdraw your consent.</li>
                        <li>Requests can be sent to fajufahad1989@gmail.com.</li>
                    </ul>

                    <h3>Data Sharing</h3>
                    <ul>
                        <li>We do not sell or share personal data with third parties.</li>
                        <li>Hosting or infrastructure providers may process limited technical data under their privacy policies, ensuring adequate protection.</li>
                    </ul>

                    <h3>Data Security</h3>
                    <ul>
                        <li>We implement appropriate technical and organizational measures to protect personal data from unauthorized access, alteration, disclosure, or loss.</li>
                        <li>Access is limited to authorized personnel only.</li>
                    </ul>

                    <h3>Policy Toward Children</h3>
                    <p>
                        Our Website is not directed to individuals under 18. We do not knowingly collect personal data from minors.
                    </p>

                    <h3>Changes to This Privacy Policy</h3>
                    <ul>
                        <li>VENENA MARKETING SERVICES - FZCO reserves the right to update or modify this Privacy Policy at any time and at its sole discretion.</li>
                        <li>Any such changes will take effect immediately upon publication on this Website.</li>
                        <li>Continued use of the Website constitutes acceptance of the updated Policy.</li>
                    </ul>

                    <h3>Contact Us</h3>
                    <ul>
                        <li>Email: fajufahad1989@gmail.com</li>
                        <li>Address: Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates, UAE</li>
                        <li>Phone: +97 15 0131 2484</li>
                    </ul>
                    <p>© 2025 VENENA MARKETING SERVICES - FZCO. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyModal;