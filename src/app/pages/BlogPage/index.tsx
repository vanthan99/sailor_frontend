/**
 *
 * BlogPage
 *
 */
import { BlogItem } from 'app/components/BlogItem/Loadable';
import { Breadcrumbs } from 'app/components/Breadcrumbs/Loadable';
import { Footer } from 'app/components/Footer/Loadable';
import { Header } from 'app/components/Header/Loadable';
import { ImagesResource } from 'images';
import { BlogItemModel } from 'models';
import * as React from 'react';

export function BlogPage() {
  const { BLOG_BLOG1, BLOG_BLOG2, BLOG_BLOG3, BLOG_BLOG4 } = ImagesResource;
  const BlogItemListData: Array<BlogItemModel> = [
    {
      title:
        'Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia',
      description:
        'Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.',
      image: BLOG_BLOG1,
      redirectUrl: '#',
      dateCreated: 'Jan 1, 2020',
      commentCount: 10,
      author: 'John Doe',
    },
    {
      title: 'Nisi magni odit consequatur autem nulla dolorem',
      description:
        'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam. Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.',
      image: BLOG_BLOG2,
      redirectUrl: '#',
      dateCreated: 'Jan 1, 2020',
      commentCount: 10,
      author: 'John Doe',
    },
    {
      title:
        'Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.',
      description:
        'Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis. Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.',
      image: BLOG_BLOG3,
      redirectUrl: '#',
      dateCreated: 'Jan 1, 2020',
      commentCount: 10,
      author: 'John Doe',
    },
    {
      title:
        'Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.',
      description:
        'Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui. Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.',
      image: BLOG_BLOG4,
      redirectUrl: '#',
      dateCreated: 'Jan 1, 2020',
      commentCount: 10,
      author: 'John Doe',
    },
  ];

  const loadBlogItem = BlogItemListData.map((item, index) => (
    <BlogItem key={index} {...item} />
  ));
  return (
    <>
      <Header />
      <Breadcrumbs />
      {/* ======= Blog Section ======= */}
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              {loadBlogItem}
              <div className="blog-pagination">
                <ul className="justify-content-center">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End blog entries list */}
            <div className="col-lg-4">
              <div className="sidebar">
                <h3 className="sidebar-title">Search</h3>
                <div className="sidebar-item search-form">
                  <form>
                    <input type="text" />
                    <button type="submit">
                      <i className="bi bi-search" />
                    </button>
                  </form>
                </div>
                {/* End sidebar search formn*/}
                <h3 className="sidebar-title">Categories</h3>
                <div className="sidebar-item categories">
                  <ul>
                    <li>
                      <a href="#">
                        General <span>(25)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Lifestyle <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Travel <span>(5)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Design <span>(22)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Creative <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Educaion <span>(14)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End sidebar categories*/}
                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  <div className="post-item clearfix">
                    <img src="assets/img/blog/blog-recent-1.jpg" alt="" />
                    <h4>
                      <a href="blog-single.html">
                        Nihil blanditiis at in nihil autem
                      </a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                  <div className="post-item clearfix">
                    <img src="assets/img/blog/blog-recent-2.jpg" alt="" />
                    <h4>
                      <a href="blog-single.html">Quidem autem et impedit</a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                  <div className="post-item clearfix">
                    <img src="assets/img/blog/blog-recent-3.jpg" alt="" />
                    <h4>
                      <a href="blog-single.html">
                        Id quia et et ut maxime similique occaecati ut
                      </a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                  <div className="post-item clearfix">
                    <img src="assets/img/blog/blog-recent-4.jpg" alt="" />
                    <h4>
                      <a href="blog-single.html">
                        Laborum corporis quo dara net para
                      </a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                  <div className="post-item clearfix">
                    <img src="assets/img/blog/blog-recent-5.jpg" alt="" />
                    <h4>
                      <a href="blog-single.html">
                        Et dolores corrupti quae illo quod dolor
                      </a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                </div>
                {/* End sidebar recent posts*/}
                <h3 className="sidebar-title">Tags</h3>
                <div className="sidebar-item tags">
                  <ul>
                    <li>
                      <a href="#">App</a>
                    </li>
                    <li>
                      <a href="#">IT</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Mac</a>
                    </li>
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">Office</a>
                    </li>
                    <li>
                      <a href="#">Creative</a>
                    </li>
                    <li>
                      <a href="#">Studio</a>
                    </li>
                    <li>
                      <a href="#">Smart</a>
                    </li>
                    <li>
                      <a href="#">Tips</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                  </ul>
                </div>
                {/* End sidebar tags*/}
              </div>
              {/* End sidebar */}
            </div>
            {/* End blog sidebar */}
          </div>
        </div>
      </section>
      {/* End Blog Section */}

      <Footer />
    </>
  );
}
