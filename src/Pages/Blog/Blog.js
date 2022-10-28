import React from "react";
import "./Blog.css";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container>
      <div className="blog-container accordian-height p-5">
        <div className="blog-title">
          <h4 className="text-center text-white   ">Question & answer</h4>
          <div className="border mt-4 mx-auto"></div>
        </div>
        <Accordion
          defaultActiveKey="0"
          className=" mx-auto mt-5 accordian-container"
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. What is Cors?</Accordion.Header>
            <Accordion.Body>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              2. What is the use of firebase? What other options there to
              implement authentication?
            </Accordion.Header>
            <Accordion.Body>
              Firebase is used for many purposes that can help your apps to
              develop, grow and make it a quality app.Moreover, Firebase is made
              with a developer in mind to solve all the issues they might face
              when making an app. Firebase Authentication can help you to
              implement the feature that a newbie can dream of, like doing
              email/SMS verification, letting users sign in/sign up.It saves a
              ton of time by providing a simple way to handle the sign-in/signup
              process.The best part is that it builds trust and increases the
              users’ base of your app that makes it more professional, better,
              and faster.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              3. How does the private route work?
            </Accordion.Header>
            <Accordion.Body>
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in)
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              4. What is node? How does node work?
            </Accordion.Header>
            <Accordion.Body>
              Node. js is a JavaScript runtime environment that achieves low
              latency and high throughput by taking a “non-blocking” approach to
              serving requests. In other words, Node. js wastes no time or
              resources on waiting for I/O requests to return. In the
              traditional approach to creating web servers, for each incoming
              request or connection the server spawns a new thread of execution
              or even forks a new process to handle the request and send a
              response. Conceptually, this makes perfect sense, but in practice
              it incurs a great deal of overhead. While spawning threads incurs
              less memory and CPU overhead than forking processes, it can still
              be inefficient. The presence of a large number of threads can
              cause a heavily loaded system to spend precious cycles on thread
              scheduling and context switching, which adds latency and imposes
              limits on scalability and throughput.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Container>
  );
};

export default Blog;
