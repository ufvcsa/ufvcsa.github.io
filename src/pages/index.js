import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>UFV Computing Student Association</h1>
    <p>
      UFV’s Computing Student Association exists to represent computing students
      to UFV faculty and Staff. We provide a space for students to hang out,
      make friends, and inquire about tutoring or help with projects. We manage
      the Student Computing Centre (SCC) in room D224 in D-building at the
      Abbotsford campus. If you have an event you want to organize, or a project
      you would like to run, talk with us and we’ll work with you to make it
      happen.
    </p>
    <br />
    <p>
      Check us out on <a href="https://www.facebook.com/UFV.CISSA">Facebook</a>{' '}
      or follow us on <a href="https://twitter.com/ufvcsa">Twitter</a>!
    </p>
    <h1>About</h1>
    <p>
      The Computing Student Association has been around since 2006, though it
      used to be formerly known as the UFV Computer Information Systems Student
      Association (CISSA). The CSA represents the students in the Computing
      Information Systems program at the{' '}
      <a href="https://ufv.ca">University of the Fraser Valley</a> to staff and
      faculty. The CSA is based in the the Student Computing Center in D
      Building, where students can stop by, both to do computer-related
      homework, and to ask for tutoring assistance on various CIS or CS related
      topics.
    </p>
    <p>
      The goal CSA is to fully provide a fun and enjoyable environment for
      students on campus, to help build a community of like-minded students from
      all disciplines in the CIS world.
    </p>
  </Layout>
);

export default IndexPage;