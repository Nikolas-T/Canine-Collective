const newFormHandler = async (event) => {
  event.preventDefault();

  const id = document.querySelector('.dog-name').value.trim();
  const dog_name = document.querySelector('#project-funding').value.trim();
 
  if (id && dog_name) {
    const response = await fetch(`/api/dogs`, {
      method: 'POST',
      body: JSON.stringify({ id, dog_name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create profile choice');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/dogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete profile choice');
    }
  }
};


document
  .querySelector('.canine-list')
  .addEventListener('click', delButtonHandler);
