import Comment from "./Comment";
const comments = [
  {
    name:"AShish Godiyal",
    comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    replies:[{
      name:"AShish Godiyal",
      comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      replies:[{
        name:"AShish Godiyal",
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        replies:[{
          name:"AShish Godiyal",
          comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          replies:[{
            name:"AShish Godiyal",
            comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            replies:[{
              name:"AShish Godiyal",
              comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
              replies:[{
                name:"AShish Godiyal",
                comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                replies:[]
              }]
            }]
          }]
        }]
      },{
        name:"AShish Godiyal",
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        replies:[]
      },{
        name:"AShish Godiyal",
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        replies:[]
      }]
    },
    {
      name:"AShish Godiyal",
      comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      replies:[]
    },
    {
      name:"AShish Godiyal",
      comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      replies:[]
    },
    {
      name:"AShish Godiyal",
      comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      replies:[]
    }]
  },
  {
    name:"AShish Godiyal",
    comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    replies:[]
  },
  {
    name:"AShish Godiyal",
    comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    replies:[{
      name:"AShish Godiyal",
      comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      replies:[{
        name:"AShish Godiyal",
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        replies:[{
          name:"AShish Godiyal",
          comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          replies:[]
        }]
      }]
    }]
  },
  {
    name:"AShish Godiyal",
    comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    replies:[{
      name:"AShish Godiyal",
      comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      replies:[{
        name:"AShish Godiyal",
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        replies:[]
      }]
    }]
  },
  {
    name:"AShish Godiyal",
    comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    replies:[{
      name:"AShish Godiyal",
      comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      replies:[{
        name:"AShish Godiyal",
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        replies:[{
          name:"AShish Godiyal",
          comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          replies:[]
        }]
      }]
    }]
  }
];

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 ml-3 border border-l-black">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return <CommentList comments={comments} />;
};

export default CommentsContainer;
