/**
 *
 * Faq
 *
 */
import * as React from 'react';

interface Props {}

export const Faq = (props: Props) => {
  return (
    <>
      {/* ======= Frequently Asked Questions Section ======= */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="section-title">
            <h2>F.A.Q</h2>
            <p>Frequently Asked Questions</p>
          </div>
          <div className="row faq-item d-flex align-items-stretch">
            <div className="col-lg-5">
              <i className="bx bx-help-circle" />
              <h4>Non consectetur a erat nam at lectus urna duis?</h4>
            </div>
            <div className="col-lg-7">
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                magna fringilla urna porttitor rhoncus dolor purus non.
              </p>
            </div>
          </div>
          {/* End F.A.Q Item*/}
          <div className="row faq-item d-flex align-items-stretch">
            <div className="col-lg-5">
              <i className="bx bx-help-circle" />
              <h4>
                Feugiat scelerisque varius morbi enim nunc faucibus a
                pellentesque?
              </h4>
            </div>
            <div className="col-lg-7">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant
                morbi. Id interdum velit laoreet id donec ultrices. Fringilla
                phasellus faucibus scelerisque eleifend donec pretium. Est
                pellentesque elit ullamcorper dignissim.
              </p>
            </div>
          </div>
          {/* End F.A.Q Item*/}
          <div className="row faq-item d-flex align-items-stretch">
            <div className="col-lg-5">
              <i className="bx bx-help-circle" />
              <h4>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant
                morbi?
              </h4>
            </div>
            <div className="col-lg-7">
              <p>
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                pellentesque eu tincidunt. Lectus urna duis convallis convallis
                tellus.
              </p>
            </div>
          </div>
          {/* End F.A.Q Item*/}
          <div className="row faq-item d-flex align-items-stretch">
            <div className="col-lg-5">
              <i className="bx bx-help-circle" />
              <h4>
                Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
              </h4>
            </div>
            <div className="col-lg-7">
              <p>
                Aperiam itaque sit optio et deleniti eos nihil quidem cumque.
                Voluptas dolorum accusantium sunt sit enim. Provident
                consequuntur quam aut reiciendis qui rerum dolorem sit odio.
                Repellat assumenda soluta sunt pariatur error doloribus fuga.
              </p>
            </div>
          </div>
          {/* End F.A.Q Item*/}
          <div className="row faq-item d-flex align-items-stretch">
            <div className="col-lg-5">
              <i className="bx bx-help-circle" />
              <h4>
                Tempus quam pellentesque nec nam aliquam sem et tortor
                consequat?
              </h4>
            </div>
            <div className="col-lg-7">
              <p>
                Molestie a iaculis at erat pellentesque adipiscing commodo.
                Dignissim suspendisse in est ante in. Nunc vel risus commodo
                viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                bibendum est. Purus gravida quis blandit turpis cursus in
              </p>
            </div>
          </div>
          {/* End F.A.Q Item*/}
        </div>
      </section>
      {/* End Frequently Asked Questions Section */}
    </>
  );
};
