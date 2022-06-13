import loadable from "@loadable/component";

const LetUsTalk = loadable(() => import("../components/sections/letUsTalk"));

const About = () => {
  return (
    <>
      <div className="page">
        {/* <Container> */}
        <div className="container">
          <div className="row">
            {/* <Helmet>
              <title>More About Zar Ni @ David</title>
              <meta
                name="description"
                content="more details about Zar Ni @ David"
              />
              <link rel="canonical" href="https://zarnimyo.com/about" />
            </Helmet> */}
            <div className="col-12 mt-5">
              {/* <ParagraphRight> */}
              <h1 className="display-4">About.</h1>
              <hr className="my-4 bg-dark" />
              {/* </ParagraphRight>
              <ParagraphLeft> */}
              <p>
                I{`&apos;`}m Zar Ni @ David, a tech enthusiast and ICT
                instructor from Yangon, Myanmar. I enjoy to share what I thought
                and know through my blog and training. I{`&apos;`}ve been on the
                tech and teaching for around 15 years and have become pretty
                good at it. I hang out on LinkedIn and Facebook and would love
                to meet you!
              </p>
              <p>
                I{`&apos;`}m super passionate about design, development, and
                business. From a technical standpoint, I spend most of my time
                working with DotNET Core, NodeJs and sometimes with UI, UX,
                JavaScript, CSS3, HTML5. New and open source technologies make
                me superb excited and can{`&apos;`}t wait to see the modern web
                in the next few years.
              </p>
              <p>
                Apart from creating, learning and teaching, I love to spend my
                time with my beautiful wife Maple Thwin, my son Swan Pyae, my
                family and friends.
              </p>
              {/* </ParagraphLeft> */}
            </div>
            <div className="col-12 my-5">
              {/* <ParagraphRight> */}
              <h2>Skillset.</h2>
              <hr className="bg-dark" />
              {/* </ParagraphRight>
              <ParagraphLeft> */}
              <div className="table-responsive-sm">
                <table className="table text-center table-dark-50">
                  <thead className="thead-dark">
                    <tr>
                      <th>CORE</th>
                      <th>LIBRARIES</th>
                      <th>INTEGRATIONS</th>
                    </tr>
                  </thead>
                  <tbody className="tbody-light">
                    <tr>
                      <td>DotNET Core</td>
                      <td>React.js</td>
                      <td>Google Maps</td>
                    </tr>
                    <tr>
                      <td>Node.js</td>
                      <td>Angular.js</td>
                      <td>Facebook</td>
                    </tr>
                    <tr>
                      <td>JavaScript</td>
                      <td>Express</td>
                      <td>Twitter</td>
                    </tr>
                    <tr>
                      <td>HTML5</td>
                      <td>Grant + Gulp</td>
                      <td>Instagram</td>
                    </tr>
                    <tr>
                      <td>CSS3</td>
                      <td>Bootstrap</td>
                      <td>MailChimp</td>
                    </tr>
                    <tr>
                      <td>PHP</td>
                      <td>jQuery</td>
                      <td>oAuth</td>
                    </tr>
                    <tr>
                      <td>SQL && MongoDB</td>
                      <td>Advanced WordPress</td>
                      <td>YouTube</td>
                    </tr>
                  </tbody>
                  <tfoot className="thead-dark">
                    <tr>
                      <th>CORE</th>
                      <th>LIBRARIES</th>
                      <th>INTEGRATIONS</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              {/* </ParagraphLeft> */}
            </div>
          </div>
        </div>
        {/* </Container> */}
      </div>
      <LetUsTalk />
    </>
  );
};

export default About;
