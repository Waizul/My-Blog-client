import React from 'react';
import { Icon } from '../../globalStyles';
import { AuthorName, EditIcon, PostEdit, SinglePostContainer, SinglePostDesc, SinglePostInfo, SinglePostTitle, SinglePostWrapper } from './singlePostStyle';

const SinglePost = () => {
  return <SinglePostContainer>
      <SinglePostWrapper>
          <img  src='https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' />
          <SinglePostTitle>New Post
              <PostEdit>
                  <EditIcon><i className="far fa-edit"></i></EditIcon>
                  <EditIcon className='trash'><i className="far fa-trash-alt"></i></EditIcon>
              </PostEdit>
          </SinglePostTitle>
          <SinglePostInfo>
              <AuthorName>
                  Author <b>Waizul</b>
              </AuthorName>
              <span>1 day ago</span>
          </SinglePostInfo>
          <SinglePostDesc>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque tempore mollitia laboriosam minima obcaecati tempora, incidunt facere possimus ad magnam temporibus inventore iusto aut aperiam, ipsum quas nostrum praesentium minus hic asperiores ducimus. Quae quas molestiae sunt eum doloremque culpa eligendi asperiores quia, minima laboriosam saepe a magni enim fuga tenetur, expedita ullam cupiditate fugiat. Tenetur deleniti eveniet, quos doloribus provident quo soluta veritatis nesciunt laboriosam dicta sint nihil animi quibusdam harum dolorum autem repellat hic voluptate molestiae dignissimos neque id. Adipisci saepe, architecto quo molestias officiis recusandae excepturi animi porro cum vero? In esse repudiandae reprehenderit quasi illum minus dolores maiores non eligendi reiciendis ex, iure mollitia tenetur exercitationem, debitis voluptatem animi molestias praesentium accusamus. Architecto perspiciatis alias ut, voluptatibus delectus aliquam laborum laudantium error, ratione ab minus autem amet accusantium nostrum inventore aut cumque facilis nisi maxime. Eligendi blanditiis deleniti repellat omnis, vero sunt nobis odio non beatae dignissimos, quas necessitatibus earum veniam perferendis quisquam eius alias cupiditate ratione, officiis explicabo architecto in. Rerum voluptatem magni quos doloremque totam blanditiis, labore ad praesentium cupiditate, tempora a. Sequi tenetur, est aspernatur, fugiat dolor pariatur expedita dicta distinctio deleniti possimus id enim magni iusto accusamus inventore quis eos laudantium nihil ipsam itaque quae placeat beatae. Veniam facilis maiores, veritatis voluptate aliquid in deserunt repellat atque doloribus tempora ipsa incidunt culpa sunt fugit dolore sint magnam ut! Labore suscipit quo sed accusamus eius facere dignissimos nihil inventore consequatur magnam possimus saepe ad, velit ducimus nam tenetur nobis natus! Earum natus accusantium sunt! Aliquid suscipit eveniet quibusdam rem doloremque, et pariatur nobis eligendi eos praesentium numquam veniam dolores voluptatem? Quas, a. Explicabo ab impedit suscipit aperiam repellat mollitia ipsam possimus dolorum, necessitatibus ut id doloremque sint veritatis atque deserunt ducimus repudiandae. Quidem quaerat ratione corrupti labore vel. Voluptatibus, autem tempora? Nulla iure sequi enim sint quibusdam, consequuntur porro perferendis vitae ad totam adipisci error velit eius! Ab tempora eum blanditiis dolore hic neque accusantium est, laudantium modi rerum dicta id dolorem enim magni molestiae ut, ratione repudiandae impedit sequi soluta. Fuga, culpa non. Asperiores, vero assumenda voluptatibus explicabo molestiae maiores veritatis sed itaque, accusantium suscipit dolor doloribus fugit! Temporibus fugiat quos dolorem, nulla nostrum nam natus maiores atque officiis tempore, corporis, itaque ex placeat rerum! Harum ea obcaecati explicabo quis laborum deserunt enim, veritatis nam quo fugiat repellendus culpa soluta quod ut porro consectetur ab dignissimos quae quibusdam! Quas sed dolorum autem vel dolor, facilis nesciunt quam harum saepe voluptate rem officiis exercitationem provident unde ipsa molestias rerum quibusdam porro perferendis nam quo eos suscipit! Possimus magni, esse eveniet, inventore iste minima impedit fuga, non ipsam praesentium corrupti repudiandae dolores in quisquam commodi voluptas voluptatibus id asperiores sint numquam nihil illo culpa? Illum reprehenderit ut cumque repellendus nostrum incidunt, cum consequatur vero facere reiciendis, provident labore quia nulla voluptatum et obcaecati tempore sed nihil nisi dolorum. Necessitatibus facilis et incidunt quod, molestiae aliquam aut commodi esse sapiente inventore assumenda. Nostrum, quaerat aspernatur. Veniam corporis iste ut consequuntur, quia quas eaque ratione delectus?
          </SinglePostDesc>

      </SinglePostWrapper>
  </SinglePostContainer>
};

export default SinglePost;
