import React from 'react';
import { Accordion } from 'react-bootstrap';
import img from './images/Faq.png'
const Faq = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className='col-md-6 mt-5'>
                    <h3>Frequently Asked Questions</h3>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What Is The Best Whitener For Your Teeth?</Accordion.Header>
                            <Accordion.Body>
                                There are many teeth whitening products out there in the market. But every product doesn’t perform in the same way. Some clinics prefer light activated teeth whitening system. They were gold standard for quite a few time. But recently chemically activated teeth whitening systems are being revealed and becoming popular.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How Soon After Tooth Extraction Can I Have An Implant?</Accordion.Header>
                            <Accordion.Body>
                                It is possible sometimes to place Dental Implants on the same appointment of teeth removal. Usually, three months of healing time is needed before Implant placement. If you wait for a very long time after tooth removal, there will be loss of bone. It will make Implant placement more difficult in future.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Do Fillings Hurt Without An Injection?</Accordion.Header>
                            <Accordion.Body>
                                Usually Dental Filling procedure doesn’t need injection. But if the cavity is very deep, then you might feel sensitivity during removal of decayed tooth material. In these deep cavity cases, your dentist might prefer injection before starting Dental Filling procedure.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Does Teeth Cleaning Makes Your Teeth Whiter?
                            </Accordion.Header>
                            <Accordion.Body>
                                Yes, Dental Cleaning may cause your teeth to appear white to some extend. During the cleaning process, your teeth will be certainly whitened a bit as we remove any plaque and tartar buildup. If you are looking for a brighter & whiter smile, we would recommend you Professional Teeth Whitening treatment.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Is It Painful To Get A Dental Bridge?
                            </Accordion.Header>
                            <Accordion.Body>
                                After making you sufficiently numb, Dental Bridge treatment process is not painful. First step is to prepare the teeth that will anchor the Bridge. Impression is then taken and send to lab for final Dental Bridge. A Temporary Bridge is fabricated in the clinic and cemented to prepared teeth. There is usually little pain afterward.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion></div>
                <div className='col-md-6'>
                    <img src={img} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Faq;