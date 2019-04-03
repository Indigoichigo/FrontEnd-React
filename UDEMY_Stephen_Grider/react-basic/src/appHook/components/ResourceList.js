import React, { useState, useEffect } from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
      {}
    </ul>
  );
};

export default ResourceList;

// useEffect is an Method combine componentDidMount and componentDidUpdate,
// and use both by seeing second argument(array)
// when second argument is same, no called!
// if not same, called!
// in the arrow function, should be an IIFE(if do not write another function to wrap it)
