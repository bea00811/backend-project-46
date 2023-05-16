import yaml from 'js-yaml';

const parser = (format, fileData) => {
  switch (format) {
    case '.json':
      return JSON.parse(fileData);
    case '.yaml':
      return yaml.load(fileData);
    case '.yml':
      return yaml.load(fileData);
    default:
      throw new Error('Sorry, wrong file format. Please write correctly');
  }
};

export default parser;
