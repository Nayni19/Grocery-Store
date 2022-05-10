const state = {
  reviewList: [],
};
// taskList--> reviewList

// Step 1: Select the row to insert
const reviewContents = document.querySelector(".review__contents");
// task__contents --> review__contents
// taskContents --> reviewContents

const htmlReviewContent = ({
  // htmlTaskContent --> htmlReviewContent
  id,
  title,
  description,
  type,
  url,
}) => ` 
  
  <div class="col-lg-4 col-md-6 col-sm-12  id=${id} key=${id}">
  <div class="card mb-3 review-card shadow-sm ">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src=${url}
          class="rounded-circle"
          alt="user image"
          width="100%"
        />
      </div>
      <div class="col-md-8 right-col">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text sub-title">${type}</p>
        </div>
      </div>
    </div>
    <div class="card-body">
      <p class="card-text cust-review">
      ${description}
      </p>
    </div>
  </div>
</div>
  `;

//   Add review to local storage
const updateLocalStorage = () => {
  localStorage.setItem(
    "reviews",
    JSON.stringify({ reviews: state.reviewList })
  );
};

const loadInitialData = () => {
  const localStorageCopy = JSON.parse(localStorage.reviews);
  if (localStorageCopy) state.reviewList = localStorageCopy.reviews;
  state.reviewList.map((cardData) => {
    reviewContents.insertAdjacentHTML("beforeend", htmlReviewContent(cardData));
  });
};

const handlesubmit = (e) => {
  const id = `${Date.now()}`;
  const input = {
    url: document.getElementById("imageUrl").value,
    title: document.getElementById("reviewName").value,
    description: document.getElementById("review-description").value,
    type: document.getElementById("client-type").value,
  };

  reviewContents.insertAdjacentHTML(
    "beforeend",
    htmlReviewContent({ ...input, id })
  );
  state.reviewList.push({ ...input, id });
  updateLocalStorage();
};
