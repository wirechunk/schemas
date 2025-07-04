'use strict';
export const validateContextData = validate20;
const schema31 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/context-data/context-data.json',
  title: 'ContextData',
  type: 'object',
  additionalProperties: { $ref: '#/$defs/dataValue' },
  $defs: {
    dataValue: {
      anyOf: [
        { type: 'boolean' },
        { type: 'string' },
        { type: 'number' },
        { type: 'null' },
        { type: 'array', items: { $ref: '#/$defs/dataTableRow' } },
        { $ref: '#/$defs/uploadedFile' },
        { type: 'array', items: { type: 'string' } },
      ],
    },
    dataTableRow: {
      type: 'object',
      properties: { id: { type: 'string' }, data: { $ref: '#' } },
      required: ['id', 'data'],
    },
    uploadedFile: {
      type: 'object',
      properties: { fileId: { type: 'string' } },
      required: ['fileId'],
    },
  },
};
const schema32 = {
  anyOf: [
    { type: 'boolean' },
    { type: 'string' },
    { type: 'number' },
    { type: 'null' },
    { type: 'array', items: { $ref: '#/$defs/dataTableRow' } },
    { $ref: '#/$defs/uploadedFile' },
    { type: 'array', items: { type: 'string' } },
  ],
};
const schema34 = {
  type: 'object',
  properties: { fileId: { type: 'string' } },
  required: ['fileId'],
};
const schema33 = {
  type: 'object',
  properties: { id: { type: 'string' }, data: { $ref: '#' } },
  required: ['id', 'data'],
};
const root0 = { validate: validate20 };
function validate22(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate22.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.id === undefined && (missing0 = 'id')) ||
        (data.data === undefined && (missing0 = 'data'))
      ) {
        validate22.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.id !== undefined) {
          const _errs1 = errors;
          if (typeof data.id !== 'string') {
            validate22.errors = [
              {
                instancePath: instancePath + '/id',
                schemaPath: '#/properties/id/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              },
            ];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.data !== undefined) {
            const _errs3 = errors;
            if (
              !root0.validate(data.data, {
                instancePath: instancePath + '/data',
                parentData: data,
                parentDataProperty: 'data',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors =
                vErrors === null ? root0.validate.errors : vErrors.concat(root0.validate.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate22.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate22.errors = vErrors;
  return errors === 0;
}
validate22.evaluated = {
  props: { id: true, data: true },
  dynamicProps: false,
  dynamicItems: false,
};
function validate21(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate21.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  if (typeof data !== 'boolean') {
    const err0 = {
      instancePath,
      schemaPath: '#/anyOf/0/type',
      keyword: 'type',
      params: { type: 'boolean' },
      message: 'must be boolean',
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  const _errs3 = errors;
  if (typeof data !== 'string') {
    const err1 = {
      instancePath,
      schemaPath: '#/anyOf/1/type',
      keyword: 'type',
      params: { type: 'string' },
      message: 'must be string',
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  var _valid0 = _errs3 === errors;
  valid0 = valid0 || _valid0;
  const _errs5 = errors;
  if (!(typeof data == 'number' && isFinite(data))) {
    const err2 = {
      instancePath,
      schemaPath: '#/anyOf/2/type',
      keyword: 'type',
      params: { type: 'number' },
      message: 'must be number',
    };
    if (vErrors === null) {
      vErrors = [err2];
    } else {
      vErrors.push(err2);
    }
    errors++;
  }
  var _valid0 = _errs5 === errors;
  valid0 = valid0 || _valid0;
  const _errs7 = errors;
  if (data !== null) {
    const err3 = {
      instancePath,
      schemaPath: '#/anyOf/3/type',
      keyword: 'type',
      params: { type: 'null' },
      message: 'must be null',
    };
    if (vErrors === null) {
      vErrors = [err3];
    } else {
      vErrors.push(err3);
    }
    errors++;
  }
  var _valid0 = _errs7 === errors;
  valid0 = valid0 || _valid0;
  const _errs9 = errors;
  if (errors === _errs9) {
    if (Array.isArray(data)) {
      var valid1 = true;
      const len0 = data.length;
      for (let i0 = 0; i0 < len0; i0++) {
        const _errs11 = errors;
        if (
          !validate22(data[i0], {
            instancePath: instancePath + '/' + i0,
            parentData: data,
            parentDataProperty: i0,
            rootData,
            dynamicAnchors,
          })
        ) {
          vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
          errors = vErrors.length;
        }
        var valid1 = _errs11 === errors;
        if (!valid1) {
          break;
        }
      }
    } else {
      const err4 = {
        instancePath,
        schemaPath: '#/anyOf/4/type',
        keyword: 'type',
        params: { type: 'array' },
        message: 'must be array',
      };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
  }
  var _valid0 = _errs9 === errors;
  valid0 = valid0 || _valid0;
  if (_valid0) {
    var items0 = true;
  }
  const _errs12 = errors;
  const _errs13 = errors;
  if (errors === _errs13) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.fileId === undefined && (missing0 = 'fileId')) {
        const err5 = {
          instancePath,
          schemaPath: '#/$defs/uploadedFile/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err5];
        } else {
          vErrors.push(err5);
        }
        errors++;
      } else {
        if (data.fileId !== undefined) {
          if (typeof data.fileId !== 'string') {
            const err6 = {
              instancePath: instancePath + '/fileId',
              schemaPath: '#/$defs/uploadedFile/properties/fileId/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            };
            if (vErrors === null) {
              vErrors = [err6];
            } else {
              vErrors.push(err6);
            }
            errors++;
          }
        }
      }
    } else {
      const err7 = {
        instancePath,
        schemaPath: '#/$defs/uploadedFile/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err7];
      } else {
        vErrors.push(err7);
      }
      errors++;
    }
  }
  var _valid0 = _errs12 === errors;
  valid0 = valid0 || _valid0;
  if (_valid0) {
    var props0 = {};
    props0.fileId = true;
  }
  const _errs17 = errors;
  if (errors === _errs17) {
    if (Array.isArray(data)) {
      var valid4 = true;
      const len1 = data.length;
      for (let i1 = 0; i1 < len1; i1++) {
        const _errs19 = errors;
        if (typeof data[i1] !== 'string') {
          const err8 = {
            instancePath: instancePath + '/' + i1,
            schemaPath: '#/anyOf/6/items/type',
            keyword: 'type',
            params: { type: 'string' },
            message: 'must be string',
          };
          if (vErrors === null) {
            vErrors = [err8];
          } else {
            vErrors.push(err8);
          }
          errors++;
        }
        var valid4 = _errs19 === errors;
        if (!valid4) {
          break;
        }
      }
    } else {
      const err9 = {
        instancePath,
        schemaPath: '#/anyOf/6/type',
        keyword: 'type',
        params: { type: 'array' },
        message: 'must be array',
      };
      if (vErrors === null) {
        vErrors = [err9];
      } else {
        vErrors.push(err9);
      }
      errors++;
    }
  }
  var _valid0 = _errs17 === errors;
  valid0 = valid0 || _valid0;
  if (_valid0) {
    if (items0 !== true) {
      items0 = true;
    }
  }
  if (!valid0) {
    const err10 = {
      instancePath,
      schemaPath: '#/anyOf',
      keyword: 'anyOf',
      params: {},
      message: 'must match a schema in anyOf',
    };
    if (vErrors === null) {
      vErrors = [err10];
    } else {
      vErrors.push(err10);
    }
    errors++;
    validate21.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate21.errors = vErrors;
  evaluated0.props = props0;
  evaluated0.items = items0;
  return errors === 0;
}
validate21.evaluated = { dynamicProps: true, dynamicItems: true };
function validate20(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/context-data/context-data.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate20.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      for (const key0 in data) {
        const _errs2 = errors;
        if (
          !validate21(data[key0], {
            instancePath: instancePath + '/' + key0.replace(/~/g, '~0').replace(/\//g, '~1'),
            parentData: data,
            parentDataProperty: key0,
            rootData,
            dynamicAnchors,
          })
        ) {
          vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
          errors = vErrors.length;
        }
        var valid0 = _errs2 === errors;
        if (!valid0) {
          break;
        }
      }
    } else {
      validate20.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate20.errors = vErrors;
  return errors === 0;
}
validate20.evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const validateExtensionConfig = validate25;
const schema35 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/meta/extension-config.json',
  title: 'ExtensionConfig',
  type: 'object',
  properties: {
    name: { type: 'string' },
    server: {
      type: 'object',
      properties: {
        enable: { type: 'boolean' },
        database: { type: 'object', properties: { enable: { type: 'boolean' } } },
      },
    },
    components: {
      type: 'object',
      additionalProperties: {
        type: 'object',
        properties: {
          path: { type: 'string' },
          description: { type: 'string' },
          supports: { type: 'object', properties: { children: { type: 'boolean' } } },
        },
        required: ['path'],
      },
    },
  },
  required: ['name'],
};
function validate25(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/meta/extension-config.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate25.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.name === undefined && (missing0 = 'name')) {
        validate25.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.name !== undefined) {
          const _errs1 = errors;
          if (typeof data.name !== 'string') {
            validate25.errors = [
              {
                instancePath: instancePath + '/name',
                schemaPath: '#/properties/name/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              },
            ];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.server !== undefined) {
            let data1 = data.server;
            const _errs3 = errors;
            if (errors === _errs3) {
              if (data1 && typeof data1 == 'object' && !Array.isArray(data1)) {
                if (data1.enable !== undefined) {
                  const _errs5 = errors;
                  if (typeof data1.enable !== 'boolean') {
                    validate25.errors = [
                      {
                        instancePath: instancePath + '/server/enable',
                        schemaPath: '#/properties/server/properties/enable/type',
                        keyword: 'type',
                        params: { type: 'boolean' },
                        message: 'must be boolean',
                      },
                    ];
                    return false;
                  }
                  var valid1 = _errs5 === errors;
                } else {
                  var valid1 = true;
                }
                if (valid1) {
                  if (data1.database !== undefined) {
                    let data3 = data1.database;
                    const _errs7 = errors;
                    if (errors === _errs7) {
                      if (data3 && typeof data3 == 'object' && !Array.isArray(data3)) {
                        if (data3.enable !== undefined) {
                          if (typeof data3.enable !== 'boolean') {
                            validate25.errors = [
                              {
                                instancePath: instancePath + '/server/database/enable',
                                schemaPath:
                                  '#/properties/server/properties/database/properties/enable/type',
                                keyword: 'type',
                                params: { type: 'boolean' },
                                message: 'must be boolean',
                              },
                            ];
                            return false;
                          }
                        }
                      } else {
                        validate25.errors = [
                          {
                            instancePath: instancePath + '/server/database',
                            schemaPath: '#/properties/server/properties/database/type',
                            keyword: 'type',
                            params: { type: 'object' },
                            message: 'must be object',
                          },
                        ];
                        return false;
                      }
                    }
                    var valid1 = _errs7 === errors;
                  } else {
                    var valid1 = true;
                  }
                }
              } else {
                validate25.errors = [
                  {
                    instancePath: instancePath + '/server',
                    schemaPath: '#/properties/server/type',
                    keyword: 'type',
                    params: { type: 'object' },
                    message: 'must be object',
                  },
                ];
                return false;
              }
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.components !== undefined) {
              let data5 = data.components;
              const _errs11 = errors;
              if (errors === _errs11) {
                if (data5 && typeof data5 == 'object' && !Array.isArray(data5)) {
                  for (const key0 in data5) {
                    let data6 = data5[key0];
                    const _errs14 = errors;
                    if (errors === _errs14) {
                      if (data6 && typeof data6 == 'object' && !Array.isArray(data6)) {
                        let missing1;
                        if (data6.path === undefined && (missing1 = 'path')) {
                          validate25.errors = [
                            {
                              instancePath:
                                instancePath +
                                '/components/' +
                                key0.replace(/~/g, '~0').replace(/\//g, '~1'),
                              schemaPath: '#/properties/components/additionalProperties/required',
                              keyword: 'required',
                              params: { missingProperty: missing1 },
                              message: "must have required property '" + missing1 + "'",
                            },
                          ];
                          return false;
                        } else {
                          if (data6.path !== undefined) {
                            const _errs16 = errors;
                            if (typeof data6.path !== 'string') {
                              validate25.errors = [
                                {
                                  instancePath:
                                    instancePath +
                                    '/components/' +
                                    key0.replace(/~/g, '~0').replace(/\//g, '~1') +
                                    '/path',
                                  schemaPath:
                                    '#/properties/components/additionalProperties/properties/path/type',
                                  keyword: 'type',
                                  params: { type: 'string' },
                                  message: 'must be string',
                                },
                              ];
                              return false;
                            }
                            var valid4 = _errs16 === errors;
                          } else {
                            var valid4 = true;
                          }
                          if (valid4) {
                            if (data6.description !== undefined) {
                              const _errs18 = errors;
                              if (typeof data6.description !== 'string') {
                                validate25.errors = [
                                  {
                                    instancePath:
                                      instancePath +
                                      '/components/' +
                                      key0.replace(/~/g, '~0').replace(/\//g, '~1') +
                                      '/description',
                                    schemaPath:
                                      '#/properties/components/additionalProperties/properties/description/type',
                                    keyword: 'type',
                                    params: { type: 'string' },
                                    message: 'must be string',
                                  },
                                ];
                                return false;
                              }
                              var valid4 = _errs18 === errors;
                            } else {
                              var valid4 = true;
                            }
                            if (valid4) {
                              if (data6.supports !== undefined) {
                                let data9 = data6.supports;
                                const _errs20 = errors;
                                if (errors === _errs20) {
                                  if (data9 && typeof data9 == 'object' && !Array.isArray(data9)) {
                                    if (data9.children !== undefined) {
                                      if (typeof data9.children !== 'boolean') {
                                        validate25.errors = [
                                          {
                                            instancePath:
                                              instancePath +
                                              '/components/' +
                                              key0.replace(/~/g, '~0').replace(/\//g, '~1') +
                                              '/supports/children',
                                            schemaPath:
                                              '#/properties/components/additionalProperties/properties/supports/properties/children/type',
                                            keyword: 'type',
                                            params: { type: 'boolean' },
                                            message: 'must be boolean',
                                          },
                                        ];
                                        return false;
                                      }
                                    }
                                  } else {
                                    validate25.errors = [
                                      {
                                        instancePath:
                                          instancePath +
                                          '/components/' +
                                          key0.replace(/~/g, '~0').replace(/\//g, '~1') +
                                          '/supports',
                                        schemaPath:
                                          '#/properties/components/additionalProperties/properties/supports/type',
                                        keyword: 'type',
                                        params: { type: 'object' },
                                        message: 'must be object',
                                      },
                                    ];
                                    return false;
                                  }
                                }
                                var valid4 = _errs20 === errors;
                              } else {
                                var valid4 = true;
                              }
                            }
                          }
                        }
                      } else {
                        validate25.errors = [
                          {
                            instancePath:
                              instancePath +
                              '/components/' +
                              key0.replace(/~/g, '~0').replace(/\//g, '~1'),
                            schemaPath: '#/properties/components/additionalProperties/type',
                            keyword: 'type',
                            params: { type: 'object' },
                            message: 'must be object',
                          },
                        ];
                        return false;
                      }
                    }
                    var valid3 = _errs14 === errors;
                    if (!valid3) {
                      break;
                    }
                  }
                } else {
                  validate25.errors = [
                    {
                      instancePath: instancePath + '/components',
                      schemaPath: '#/properties/components/type',
                      keyword: 'type',
                      params: { type: 'object' },
                      message: 'must be object',
                    },
                  ];
                  return false;
                }
              }
              var valid0 = _errs11 === errors;
            } else {
              var valid0 = true;
            }
          }
        }
      }
    } else {
      validate25.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate25.errors = vErrors;
  return errors === 0;
}
validate25.evaluated = {
  props: { name: true, server: true, components: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateRichText = validate26;
const schema36 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/custom-field/rich-text.json',
  title: 'RichText',
  oneOf: [
    {
      title: 'Delta',
      type: 'object',
      properties: {
        delta: {
          type: 'object',
          properties: {
            ops: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  insert: { oneOf: [{ type: 'string' }, { type: 'object' }] },
                  attributes: { type: 'object' },
                },
                required: ['insert'],
              },
            },
          },
          required: ['ops'],
        },
      },
      required: ['delta'],
    },
  ],
};
function validate26(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/custom-field/rich-text.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate26.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.delta === undefined && (missing0 = 'delta')) {
        const err0 = {
          instancePath,
          schemaPath: '#/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.delta !== undefined) {
          let data0 = data.delta;
          const _errs3 = errors;
          if (errors === _errs3) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1;
              if (data0.ops === undefined && (missing1 = 'ops')) {
                const err1 = {
                  instancePath: instancePath + '/delta',
                  schemaPath: '#/oneOf/0/properties/delta/required',
                  keyword: 'required',
                  params: { missingProperty: missing1 },
                  message: "must have required property '" + missing1 + "'",
                };
                if (vErrors === null) {
                  vErrors = [err1];
                } else {
                  vErrors.push(err1);
                }
                errors++;
              } else {
                if (data0.ops !== undefined) {
                  let data1 = data0.ops;
                  const _errs5 = errors;
                  if (errors === _errs5) {
                    if (Array.isArray(data1)) {
                      var valid3 = true;
                      const len0 = data1.length;
                      for (let i0 = 0; i0 < len0; i0++) {
                        let data2 = data1[i0];
                        const _errs7 = errors;
                        if (errors === _errs7) {
                          if (data2 && typeof data2 == 'object' && !Array.isArray(data2)) {
                            let missing2;
                            if (data2.insert === undefined && (missing2 = 'insert')) {
                              const err2 = {
                                instancePath: instancePath + '/delta/ops/' + i0,
                                schemaPath:
                                  '#/oneOf/0/properties/delta/properties/ops/items/required',
                                keyword: 'required',
                                params: { missingProperty: missing2 },
                                message: "must have required property '" + missing2 + "'",
                              };
                              if (vErrors === null) {
                                vErrors = [err2];
                              } else {
                                vErrors.push(err2);
                              }
                              errors++;
                            } else {
                              if (data2.insert !== undefined) {
                                let data3 = data2.insert;
                                const _errs9 = errors;
                                const _errs10 = errors;
                                let valid5 = false;
                                let passing1 = null;
                                const _errs11 = errors;
                                if (typeof data3 !== 'string') {
                                  const err3 = {
                                    instancePath: instancePath + '/delta/ops/' + i0 + '/insert',
                                    schemaPath:
                                      '#/oneOf/0/properties/delta/properties/ops/items/properties/insert/oneOf/0/type',
                                    keyword: 'type',
                                    params: { type: 'string' },
                                    message: 'must be string',
                                  };
                                  if (vErrors === null) {
                                    vErrors = [err3];
                                  } else {
                                    vErrors.push(err3);
                                  }
                                  errors++;
                                }
                                var _valid1 = _errs11 === errors;
                                if (_valid1) {
                                  valid5 = true;
                                  passing1 = 0;
                                }
                                const _errs13 = errors;
                                if (!(data3 && typeof data3 == 'object' && !Array.isArray(data3))) {
                                  const err4 = {
                                    instancePath: instancePath + '/delta/ops/' + i0 + '/insert',
                                    schemaPath:
                                      '#/oneOf/0/properties/delta/properties/ops/items/properties/insert/oneOf/1/type',
                                    keyword: 'type',
                                    params: { type: 'object' },
                                    message: 'must be object',
                                  };
                                  if (vErrors === null) {
                                    vErrors = [err4];
                                  } else {
                                    vErrors.push(err4);
                                  }
                                  errors++;
                                }
                                var _valid1 = _errs13 === errors;
                                if (_valid1 && valid5) {
                                  valid5 = false;
                                  passing1 = [passing1, 1];
                                } else {
                                  if (_valid1) {
                                    valid5 = true;
                                    passing1 = 1;
                                  }
                                }
                                if (!valid5) {
                                  const err5 = {
                                    instancePath: instancePath + '/delta/ops/' + i0 + '/insert',
                                    schemaPath:
                                      '#/oneOf/0/properties/delta/properties/ops/items/properties/insert/oneOf',
                                    keyword: 'oneOf',
                                    params: { passingSchemas: passing1 },
                                    message: 'must match exactly one schema in oneOf',
                                  };
                                  if (vErrors === null) {
                                    vErrors = [err5];
                                  } else {
                                    vErrors.push(err5);
                                  }
                                  errors++;
                                } else {
                                  errors = _errs10;
                                  if (vErrors !== null) {
                                    if (_errs10) {
                                      vErrors.length = _errs10;
                                    } else {
                                      vErrors = null;
                                    }
                                  }
                                }
                                var valid4 = _errs9 === errors;
                              } else {
                                var valid4 = true;
                              }
                              if (valid4) {
                                if (data2.attributes !== undefined) {
                                  let data4 = data2.attributes;
                                  const _errs15 = errors;
                                  if (
                                    !(data4 && typeof data4 == 'object' && !Array.isArray(data4))
                                  ) {
                                    const err6 = {
                                      instancePath:
                                        instancePath + '/delta/ops/' + i0 + '/attributes',
                                      schemaPath:
                                        '#/oneOf/0/properties/delta/properties/ops/items/properties/attributes/type',
                                      keyword: 'type',
                                      params: { type: 'object' },
                                      message: 'must be object',
                                    };
                                    if (vErrors === null) {
                                      vErrors = [err6];
                                    } else {
                                      vErrors.push(err6);
                                    }
                                    errors++;
                                  }
                                  var valid4 = _errs15 === errors;
                                } else {
                                  var valid4 = true;
                                }
                              }
                            }
                          } else {
                            const err7 = {
                              instancePath: instancePath + '/delta/ops/' + i0,
                              schemaPath: '#/oneOf/0/properties/delta/properties/ops/items/type',
                              keyword: 'type',
                              params: { type: 'object' },
                              message: 'must be object',
                            };
                            if (vErrors === null) {
                              vErrors = [err7];
                            } else {
                              vErrors.push(err7);
                            }
                            errors++;
                          }
                        }
                        var valid3 = _errs7 === errors;
                        if (!valid3) {
                          break;
                        }
                      }
                    } else {
                      const err8 = {
                        instancePath: instancePath + '/delta/ops',
                        schemaPath: '#/oneOf/0/properties/delta/properties/ops/type',
                        keyword: 'type',
                        params: { type: 'array' },
                        message: 'must be array',
                      };
                      if (vErrors === null) {
                        vErrors = [err8];
                      } else {
                        vErrors.push(err8);
                      }
                      errors++;
                    }
                  }
                }
              }
            } else {
              const err9 = {
                instancePath: instancePath + '/delta',
                schemaPath: '#/oneOf/0/properties/delta/type',
                keyword: 'type',
                params: { type: 'object' },
                message: 'must be object',
              };
              if (vErrors === null) {
                vErrors = [err9];
              } else {
                vErrors.push(err9);
              }
              errors++;
            }
          }
        }
      }
    } else {
      const err10 = {
        instancePath,
        schemaPath: '#/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err10];
      } else {
        vErrors.push(err10);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
    var props0 = {};
    props0.delta = true;
  }
  if (!valid0) {
    const err11 = {
      instancePath,
      schemaPath: '#/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err11];
    } else {
      vErrors.push(err11);
    }
    errors++;
    validate26.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate26.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate26.evaluated = { dynamicProps: true, dynamicItems: false };
export const validateAfterEditUserStatusInput = validate27;
const schema37 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/after-edit-user-status/input.json',
  title: 'AfterEditUserStatusInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
const schema38 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/after-edit-user-status/value.json',
  title: 'AfterEditUserStatusValue',
  type: 'object',
  properties: {
    user: {
      type: 'object',
      description: 'The user whose status was changed.',
      properties: {
        id: { type: 'string', description: 'The ID of the user whose status was changed.' },
        status: { $ref: '#/$defs/userStatus', description: 'The new status of the user.' },
        previousStatus: {
          $ref: '#/$defs/userStatus',
          description: 'The previous status of the user.',
        },
      },
      required: ['id', 'status', 'previousStatus'],
    },
  },
  required: ['user'],
  $defs: {
    userStatus: { type: 'string', title: 'UserStatus', enum: ['Pending', 'Active', 'Deactivated'] },
  },
};
const schema39 = {
  type: 'string',
  title: 'UserStatus',
  enum: ['Pending', 'Active', 'Deactivated'],
};
function validate28(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/after-edit-user-status/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate28.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.user === undefined && (missing0 = 'user')) {
        validate28.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.user !== undefined) {
          let data0 = data.user;
          const _errs1 = errors;
          if (errors === _errs1) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1;
              if (
                (data0.id === undefined && (missing1 = 'id')) ||
                (data0.status === undefined && (missing1 = 'status')) ||
                (data0.previousStatus === undefined && (missing1 = 'previousStatus'))
              ) {
                validate28.errors = [
                  {
                    instancePath: instancePath + '/user',
                    schemaPath: '#/properties/user/required',
                    keyword: 'required',
                    params: { missingProperty: missing1 },
                    message: "must have required property '" + missing1 + "'",
                  },
                ];
                return false;
              } else {
                if (data0.id !== undefined) {
                  const _errs3 = errors;
                  if (typeof data0.id !== 'string') {
                    validate28.errors = [
                      {
                        instancePath: instancePath + '/user/id',
                        schemaPath: '#/properties/user/properties/id/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                  var valid1 = _errs3 === errors;
                } else {
                  var valid1 = true;
                }
                if (valid1) {
                  if (data0.status !== undefined) {
                    let data2 = data0.status;
                    const _errs5 = errors;
                    if (typeof data2 !== 'string') {
                      validate28.errors = [
                        {
                          instancePath: instancePath + '/user/status',
                          schemaPath: '#/$defs/userStatus/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                    if (!(data2 === 'Pending' || data2 === 'Active' || data2 === 'Deactivated')) {
                      validate28.errors = [
                        {
                          instancePath: instancePath + '/user/status',
                          schemaPath: '#/$defs/userStatus/enum',
                          keyword: 'enum',
                          params: { allowedValues: schema39.enum },
                          message: 'must be equal to one of the allowed values',
                        },
                      ];
                      return false;
                    }
                    var valid1 = _errs5 === errors;
                  } else {
                    var valid1 = true;
                  }
                  if (valid1) {
                    if (data0.previousStatus !== undefined) {
                      let data3 = data0.previousStatus;
                      const _errs8 = errors;
                      if (typeof data3 !== 'string') {
                        validate28.errors = [
                          {
                            instancePath: instancePath + '/user/previousStatus',
                            schemaPath: '#/$defs/userStatus/type',
                            keyword: 'type',
                            params: { type: 'string' },
                            message: 'must be string',
                          },
                        ];
                        return false;
                      }
                      if (!(data3 === 'Pending' || data3 === 'Active' || data3 === 'Deactivated')) {
                        validate28.errors = [
                          {
                            instancePath: instancePath + '/user/previousStatus',
                            schemaPath: '#/$defs/userStatus/enum',
                            keyword: 'enum',
                            params: { allowedValues: schema39.enum },
                            message: 'must be equal to one of the allowed values',
                          },
                        ];
                        return false;
                      }
                      var valid1 = _errs8 === errors;
                    } else {
                      var valid1 = true;
                    }
                  }
                }
              }
            } else {
              validate28.errors = [
                {
                  instancePath: instancePath + '/user',
                  schemaPath: '#/properties/user/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
        }
      }
    } else {
      validate28.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate28.errors = vErrors;
  return errors === 0;
}
validate28.evaluated = { props: { user: true }, dynamicProps: false, dynamicItems: false };
const schema41 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/after-edit-user-status/context.json',
  title: 'AfterEditUserStatusContext',
  description: 'The context of the request.',
  allOf: [
    { $ref: '../../request-context/principal.json' },
    { $ref: '../../request-context/site.json' },
  ],
};
const schema46 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/request-context/site.json',
  title: 'Site',
  type: 'object',
  properties: {
    site: {
      description:
        'The site from which the request originated. This field will be set only if the site belongs to the platform on which the extension is installed (is not the admin site).',
      type: 'object',
      properties: { id: { type: 'string' } },
      required: ['id'],
    },
  },
};
const schema42 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/request-context/principal.json',
  title: 'Principal',
  type: 'object',
  properties: {
    principal: {
      oneOf: [
        {
          type: 'object',
          properties: {
            user: { $ref: '#/$defs/user' },
            adminUser: { type: 'null' },
            platformApiToken: { type: 'null' },
          },
          required: ['user'],
        },
        {
          type: 'object',
          properties: {
            user: { type: 'null' },
            adminUser: { $ref: '#/$defs/adminUser' },
            platformApiToken: { type: 'null' },
          },
          required: ['adminUser'],
        },
        {
          type: 'object',
          properties: {
            user: { type: 'null' },
            adminUser: { type: 'null' },
            platformApiToken: { $ref: '#/$defs/platformApiToken' },
          },
          required: ['platformApiToken'],
        },
        { type: 'null' },
      ],
    },
  },
  $defs: {
    user: {
      description:
        'The user making the request. This is a regular user who belongs to the platform on which the request is being made.',
      type: 'object',
      properties: { id: { type: 'string' } },
      required: ['id'],
    },
    adminUser: {
      description:
        'The admin user making the request. Extensions do not see this user in the Users table.',
      type: 'object',
      properties: { id: { type: 'string' }, email: { type: 'string' } },
      required: ['id', 'email'],
    },
    platformApiToken: {
      description:
        'The platform API token that can be used to authenticate requests. This token is not tied to an admin or regular user.',
      type: 'object',
      properties: { id: { type: 'string' } },
      required: ['id'],
    },
  },
  required: ['principal'],
};
const schema43 = {
  description:
    'The user making the request. This is a regular user who belongs to the platform on which the request is being made.',
  type: 'object',
  properties: { id: { type: 'string' } },
  required: ['id'],
};
const schema44 = {
  description:
    'The admin user making the request. Extensions do not see this user in the Users table.',
  type: 'object',
  properties: { id: { type: 'string' }, email: { type: 'string' } },
  required: ['id', 'email'],
};
const schema45 = {
  description:
    'The platform API token that can be used to authenticate requests. This token is not tied to an admin or regular user.',
  type: 'object',
  properties: { id: { type: 'string' } },
  required: ['id'],
};
function validate31(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/request-context/principal.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate31.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.principal === undefined && (missing0 = 'principal')) {
        validate31.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.principal !== undefined) {
          let data0 = data.principal;
          const _errs2 = errors;
          let valid1 = false;
          let passing0 = null;
          const _errs3 = errors;
          if (errors === _errs3) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1;
              if (data0.user === undefined && (missing1 = 'user')) {
                const err0 = {
                  instancePath: instancePath + '/principal',
                  schemaPath: '#/properties/principal/oneOf/0/required',
                  keyword: 'required',
                  params: { missingProperty: missing1 },
                  message: "must have required property '" + missing1 + "'",
                };
                if (vErrors === null) {
                  vErrors = [err0];
                } else {
                  vErrors.push(err0);
                }
                errors++;
              } else {
                if (data0.user !== undefined) {
                  let data1 = data0.user;
                  const _errs5 = errors;
                  const _errs6 = errors;
                  if (errors === _errs6) {
                    if (data1 && typeof data1 == 'object' && !Array.isArray(data1)) {
                      let missing2;
                      if (data1.id === undefined && (missing2 = 'id')) {
                        const err1 = {
                          instancePath: instancePath + '/principal/user',
                          schemaPath: '#/$defs/user/required',
                          keyword: 'required',
                          params: { missingProperty: missing2 },
                          message: "must have required property '" + missing2 + "'",
                        };
                        if (vErrors === null) {
                          vErrors = [err1];
                        } else {
                          vErrors.push(err1);
                        }
                        errors++;
                      } else {
                        if (data1.id !== undefined) {
                          if (typeof data1.id !== 'string') {
                            const err2 = {
                              instancePath: instancePath + '/principal/user/id',
                              schemaPath: '#/$defs/user/properties/id/type',
                              keyword: 'type',
                              params: { type: 'string' },
                              message: 'must be string',
                            };
                            if (vErrors === null) {
                              vErrors = [err2];
                            } else {
                              vErrors.push(err2);
                            }
                            errors++;
                          }
                        }
                      }
                    } else {
                      const err3 = {
                        instancePath: instancePath + '/principal/user',
                        schemaPath: '#/$defs/user/type',
                        keyword: 'type',
                        params: { type: 'object' },
                        message: 'must be object',
                      };
                      if (vErrors === null) {
                        vErrors = [err3];
                      } else {
                        vErrors.push(err3);
                      }
                      errors++;
                    }
                  }
                  var valid2 = _errs5 === errors;
                } else {
                  var valid2 = true;
                }
                if (valid2) {
                  if (data0.adminUser !== undefined) {
                    const _errs10 = errors;
                    if (data0.adminUser !== null) {
                      const err4 = {
                        instancePath: instancePath + '/principal/adminUser',
                        schemaPath: '#/properties/principal/oneOf/0/properties/adminUser/type',
                        keyword: 'type',
                        params: { type: 'null' },
                        message: 'must be null',
                      };
                      if (vErrors === null) {
                        vErrors = [err4];
                      } else {
                        vErrors.push(err4);
                      }
                      errors++;
                    }
                    var valid2 = _errs10 === errors;
                  } else {
                    var valid2 = true;
                  }
                  if (valid2) {
                    if (data0.platformApiToken !== undefined) {
                      const _errs12 = errors;
                      if (data0.platformApiToken !== null) {
                        const err5 = {
                          instancePath: instancePath + '/principal/platformApiToken',
                          schemaPath:
                            '#/properties/principal/oneOf/0/properties/platformApiToken/type',
                          keyword: 'type',
                          params: { type: 'null' },
                          message: 'must be null',
                        };
                        if (vErrors === null) {
                          vErrors = [err5];
                        } else {
                          vErrors.push(err5);
                        }
                        errors++;
                      }
                      var valid2 = _errs12 === errors;
                    } else {
                      var valid2 = true;
                    }
                  }
                }
              }
            } else {
              const err6 = {
                instancePath: instancePath + '/principal',
                schemaPath: '#/properties/principal/oneOf/0/type',
                keyword: 'type',
                params: { type: 'object' },
                message: 'must be object',
              };
              if (vErrors === null) {
                vErrors = [err6];
              } else {
                vErrors.push(err6);
              }
              errors++;
            }
          }
          var _valid0 = _errs3 === errors;
          if (_valid0) {
            valid1 = true;
            passing0 = 0;
            var props0 = {};
            props0.user = true;
            props0.adminUser = true;
            props0.platformApiToken = true;
          }
          const _errs14 = errors;
          if (errors === _errs14) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing3;
              if (data0.adminUser === undefined && (missing3 = 'adminUser')) {
                const err7 = {
                  instancePath: instancePath + '/principal',
                  schemaPath: '#/properties/principal/oneOf/1/required',
                  keyword: 'required',
                  params: { missingProperty: missing3 },
                  message: "must have required property '" + missing3 + "'",
                };
                if (vErrors === null) {
                  vErrors = [err7];
                } else {
                  vErrors.push(err7);
                }
                errors++;
              } else {
                if (data0.user !== undefined) {
                  const _errs16 = errors;
                  if (data0.user !== null) {
                    const err8 = {
                      instancePath: instancePath + '/principal/user',
                      schemaPath: '#/properties/principal/oneOf/1/properties/user/type',
                      keyword: 'type',
                      params: { type: 'null' },
                      message: 'must be null',
                    };
                    if (vErrors === null) {
                      vErrors = [err8];
                    } else {
                      vErrors.push(err8);
                    }
                    errors++;
                  }
                  var valid5 = _errs16 === errors;
                } else {
                  var valid5 = true;
                }
                if (valid5) {
                  if (data0.adminUser !== undefined) {
                    let data6 = data0.adminUser;
                    const _errs18 = errors;
                    const _errs19 = errors;
                    if (errors === _errs19) {
                      if (data6 && typeof data6 == 'object' && !Array.isArray(data6)) {
                        let missing4;
                        if (
                          (data6.id === undefined && (missing4 = 'id')) ||
                          (data6.email === undefined && (missing4 = 'email'))
                        ) {
                          const err9 = {
                            instancePath: instancePath + '/principal/adminUser',
                            schemaPath: '#/$defs/adminUser/required',
                            keyword: 'required',
                            params: { missingProperty: missing4 },
                            message: "must have required property '" + missing4 + "'",
                          };
                          if (vErrors === null) {
                            vErrors = [err9];
                          } else {
                            vErrors.push(err9);
                          }
                          errors++;
                        } else {
                          if (data6.id !== undefined) {
                            const _errs21 = errors;
                            if (typeof data6.id !== 'string') {
                              const err10 = {
                                instancePath: instancePath + '/principal/adminUser/id',
                                schemaPath: '#/$defs/adminUser/properties/id/type',
                                keyword: 'type',
                                params: { type: 'string' },
                                message: 'must be string',
                              };
                              if (vErrors === null) {
                                vErrors = [err10];
                              } else {
                                vErrors.push(err10);
                              }
                              errors++;
                            }
                            var valid7 = _errs21 === errors;
                          } else {
                            var valid7 = true;
                          }
                          if (valid7) {
                            if (data6.email !== undefined) {
                              const _errs23 = errors;
                              if (typeof data6.email !== 'string') {
                                const err11 = {
                                  instancePath: instancePath + '/principal/adminUser/email',
                                  schemaPath: '#/$defs/adminUser/properties/email/type',
                                  keyword: 'type',
                                  params: { type: 'string' },
                                  message: 'must be string',
                                };
                                if (vErrors === null) {
                                  vErrors = [err11];
                                } else {
                                  vErrors.push(err11);
                                }
                                errors++;
                              }
                              var valid7 = _errs23 === errors;
                            } else {
                              var valid7 = true;
                            }
                          }
                        }
                      } else {
                        const err12 = {
                          instancePath: instancePath + '/principal/adminUser',
                          schemaPath: '#/$defs/adminUser/type',
                          keyword: 'type',
                          params: { type: 'object' },
                          message: 'must be object',
                        };
                        if (vErrors === null) {
                          vErrors = [err12];
                        } else {
                          vErrors.push(err12);
                        }
                        errors++;
                      }
                    }
                    var valid5 = _errs18 === errors;
                  } else {
                    var valid5 = true;
                  }
                  if (valid5) {
                    if (data0.platformApiToken !== undefined) {
                      const _errs25 = errors;
                      if (data0.platformApiToken !== null) {
                        const err13 = {
                          instancePath: instancePath + '/principal/platformApiToken',
                          schemaPath:
                            '#/properties/principal/oneOf/1/properties/platformApiToken/type',
                          keyword: 'type',
                          params: { type: 'null' },
                          message: 'must be null',
                        };
                        if (vErrors === null) {
                          vErrors = [err13];
                        } else {
                          vErrors.push(err13);
                        }
                        errors++;
                      }
                      var valid5 = _errs25 === errors;
                    } else {
                      var valid5 = true;
                    }
                  }
                }
              }
            } else {
              const err14 = {
                instancePath: instancePath + '/principal',
                schemaPath: '#/properties/principal/oneOf/1/type',
                keyword: 'type',
                params: { type: 'object' },
                message: 'must be object',
              };
              if (vErrors === null) {
                vErrors = [err14];
              } else {
                vErrors.push(err14);
              }
              errors++;
            }
          }
          var _valid0 = _errs14 === errors;
          if (_valid0 && valid1) {
            valid1 = false;
            passing0 = [passing0, 1];
          } else {
            if (_valid0) {
              valid1 = true;
              passing0 = 1;
              if (props0 !== true) {
                props0 = props0 || {};
                props0.user = true;
                props0.adminUser = true;
                props0.platformApiToken = true;
              }
            }
            const _errs27 = errors;
            if (errors === _errs27) {
              if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                let missing5;
                if (data0.platformApiToken === undefined && (missing5 = 'platformApiToken')) {
                  const err15 = {
                    instancePath: instancePath + '/principal',
                    schemaPath: '#/properties/principal/oneOf/2/required',
                    keyword: 'required',
                    params: { missingProperty: missing5 },
                    message: "must have required property '" + missing5 + "'",
                  };
                  if (vErrors === null) {
                    vErrors = [err15];
                  } else {
                    vErrors.push(err15);
                  }
                  errors++;
                } else {
                  if (data0.user !== undefined) {
                    const _errs29 = errors;
                    if (data0.user !== null) {
                      const err16 = {
                        instancePath: instancePath + '/principal/user',
                        schemaPath: '#/properties/principal/oneOf/2/properties/user/type',
                        keyword: 'type',
                        params: { type: 'null' },
                        message: 'must be null',
                      };
                      if (vErrors === null) {
                        vErrors = [err16];
                      } else {
                        vErrors.push(err16);
                      }
                      errors++;
                    }
                    var valid8 = _errs29 === errors;
                  } else {
                    var valid8 = true;
                  }
                  if (valid8) {
                    if (data0.adminUser !== undefined) {
                      const _errs31 = errors;
                      if (data0.adminUser !== null) {
                        const err17 = {
                          instancePath: instancePath + '/principal/adminUser',
                          schemaPath: '#/properties/principal/oneOf/2/properties/adminUser/type',
                          keyword: 'type',
                          params: { type: 'null' },
                          message: 'must be null',
                        };
                        if (vErrors === null) {
                          vErrors = [err17];
                        } else {
                          vErrors.push(err17);
                        }
                        errors++;
                      }
                      var valid8 = _errs31 === errors;
                    } else {
                      var valid8 = true;
                    }
                    if (valid8) {
                      if (data0.platformApiToken !== undefined) {
                        let data12 = data0.platformApiToken;
                        const _errs33 = errors;
                        const _errs34 = errors;
                        if (errors === _errs34) {
                          if (data12 && typeof data12 == 'object' && !Array.isArray(data12)) {
                            let missing6;
                            if (data12.id === undefined && (missing6 = 'id')) {
                              const err18 = {
                                instancePath: instancePath + '/principal/platformApiToken',
                                schemaPath: '#/$defs/platformApiToken/required',
                                keyword: 'required',
                                params: { missingProperty: missing6 },
                                message: "must have required property '" + missing6 + "'",
                              };
                              if (vErrors === null) {
                                vErrors = [err18];
                              } else {
                                vErrors.push(err18);
                              }
                              errors++;
                            } else {
                              if (data12.id !== undefined) {
                                if (typeof data12.id !== 'string') {
                                  const err19 = {
                                    instancePath: instancePath + '/principal/platformApiToken/id',
                                    schemaPath: '#/$defs/platformApiToken/properties/id/type',
                                    keyword: 'type',
                                    params: { type: 'string' },
                                    message: 'must be string',
                                  };
                                  if (vErrors === null) {
                                    vErrors = [err19];
                                  } else {
                                    vErrors.push(err19);
                                  }
                                  errors++;
                                }
                              }
                            }
                          } else {
                            const err20 = {
                              instancePath: instancePath + '/principal/platformApiToken',
                              schemaPath: '#/$defs/platformApiToken/type',
                              keyword: 'type',
                              params: { type: 'object' },
                              message: 'must be object',
                            };
                            if (vErrors === null) {
                              vErrors = [err20];
                            } else {
                              vErrors.push(err20);
                            }
                            errors++;
                          }
                        }
                        var valid8 = _errs33 === errors;
                      } else {
                        var valid8 = true;
                      }
                    }
                  }
                }
              } else {
                const err21 = {
                  instancePath: instancePath + '/principal',
                  schemaPath: '#/properties/principal/oneOf/2/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                };
                if (vErrors === null) {
                  vErrors = [err21];
                } else {
                  vErrors.push(err21);
                }
                errors++;
              }
            }
            var _valid0 = _errs27 === errors;
            if (_valid0 && valid1) {
              valid1 = false;
              passing0 = [passing0, 2];
            } else {
              if (_valid0) {
                valid1 = true;
                passing0 = 2;
                if (props0 !== true) {
                  props0 = props0 || {};
                  props0.user = true;
                  props0.adminUser = true;
                  props0.platformApiToken = true;
                }
              }
              const _errs38 = errors;
              if (data0 !== null) {
                const err22 = {
                  instancePath: instancePath + '/principal',
                  schemaPath: '#/properties/principal/oneOf/3/type',
                  keyword: 'type',
                  params: { type: 'null' },
                  message: 'must be null',
                };
                if (vErrors === null) {
                  vErrors = [err22];
                } else {
                  vErrors.push(err22);
                }
                errors++;
              }
              var _valid0 = _errs38 === errors;
              if (_valid0 && valid1) {
                valid1 = false;
                passing0 = [passing0, 3];
              } else {
                if (_valid0) {
                  valid1 = true;
                  passing0 = 3;
                }
              }
            }
          }
          if (!valid1) {
            const err23 = {
              instancePath: instancePath + '/principal',
              schemaPath: '#/properties/principal/oneOf',
              keyword: 'oneOf',
              params: { passingSchemas: passing0 },
              message: 'must match exactly one schema in oneOf',
            };
            if (vErrors === null) {
              vErrors = [err23];
            } else {
              vErrors.push(err23);
            }
            errors++;
            validate31.errors = vErrors;
            return false;
          } else {
            errors = _errs2;
            if (vErrors !== null) {
              if (_errs2) {
                vErrors.length = _errs2;
              } else {
                vErrors = null;
              }
            }
          }
        }
      }
    } else {
      validate31.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate31.errors = vErrors;
  return errors === 0;
}
validate31.evaluated = { props: { principal: true }, dynamicProps: false, dynamicItems: false };
function validate30(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/after-edit-user-status/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate30.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  if (
    !validate31(data, { instancePath, parentData, parentDataProperty, rootData, dynamicAnchors })
  ) {
    vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs1 = errors;
    const _errs2 = errors;
    if (errors === _errs2) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        if (data.site !== undefined) {
          let data0 = data.site;
          const _errs4 = errors;
          if (errors === _errs4) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing0;
              if (data0.id === undefined && (missing0 = 'id')) {
                validate30.errors = [
                  {
                    instancePath: instancePath + '/site',
                    schemaPath: '../../request-context/site.json/properties/site/required',
                    keyword: 'required',
                    params: { missingProperty: missing0 },
                    message: "must have required property '" + missing0 + "'",
                  },
                ];
                return false;
              } else {
                if (data0.id !== undefined) {
                  if (typeof data0.id !== 'string') {
                    validate30.errors = [
                      {
                        instancePath: instancePath + '/site/id',
                        schemaPath:
                          '../../request-context/site.json/properties/site/properties/id/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate30.errors = [
                {
                  instancePath: instancePath + '/site',
                  schemaPath: '../../request-context/site.json/properties/site/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
        }
      } else {
        validate30.errors = [
          {
            instancePath,
            schemaPath: '../../request-context/site.json/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object',
          },
        ];
        return false;
      }
    }
    var valid0 = _errs1 === errors;
  }
  validate30.errors = vErrors;
  return errors === 0;
}
validate30.evaluated = {
  props: { site: true, principal: true },
  dynamicProps: false,
  dynamicItems: false,
};
function validate27(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/after-edit-user-status/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate27.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
        validate27.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate28(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.context !== undefined) {
            const _errs2 = errors;
            if (
              !validate30(data.context, {
                instancePath: instancePath + '/context',
                parentData: data,
                parentDataProperty: 'context',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate27.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate27.errors = vErrors;
  return errors === 0;
}
validate27.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateAfterEditUserStatusResult = validate34;
const schema47 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/after-edit-user-status/result.json',
  title: 'AfterEditUserStatusResult',
  oneOf: [
    {
      type: 'object',
      properties: {
        value: { $ref: './value.json' },
        stop: {
          description:
            'If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.',
          type: ['boolean', 'null'],
        },
      },
      required: ['value'],
    },
    { $ref: '../../hook-reject-result/hook-reject-result.json' },
  ],
};
const schema48 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hook-reject-result/hook-reject-result.json',
  title: 'HookRejectResult',
  type: 'object',
  properties: { reject: { type: 'string' } },
  required: ['reject'],
};
function validate34(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/after-edit-user-status/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate34.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.value === undefined && (missing0 = 'value')) {
        const err0 = {
          instancePath,
          schemaPath: '#/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.value !== undefined) {
          const _errs3 = errors;
          if (
            !validate28(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
            errors = vErrors.length;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.stop !== undefined) {
            let data1 = data.stop;
            const _errs4 = errors;
            if (typeof data1 !== 'boolean' && data1 !== null) {
              const err1 = {
                instancePath: instancePath + '/stop',
                schemaPath: '#/oneOf/0/properties/stop/type',
                keyword: 'type',
                params: { type: schema47.oneOf[0].properties.stop.type },
                message: 'must be boolean,null',
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: '#/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
    var props0 = {};
    props0.value = true;
    props0.stop = true;
  }
  const _errs6 = errors;
  const _errs7 = errors;
  if (errors === _errs7) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (data.reject === undefined && (missing1 = 'reject')) {
        const err3 = {
          instancePath,
          schemaPath: '../../hook-reject-result/hook-reject-result.json/required',
          keyword: 'required',
          params: { missingProperty: missing1 },
          message: "must have required property '" + missing1 + "'",
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      } else {
        if (data.reject !== undefined) {
          if (typeof data.reject !== 'string') {
            const err4 = {
              instancePath: instancePath + '/reject',
              schemaPath: '../../hook-reject-result/hook-reject-result.json/properties/reject/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
        }
      }
    } else {
      const err5 = {
        instancePath,
        schemaPath: '../../hook-reject-result/hook-reject-result.json/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
  }
  var _valid0 = _errs6 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.reject = true;
      }
    }
  }
  if (!valid0) {
    const err6 = {
      instancePath,
      schemaPath: '#/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }
    errors++;
    validate34.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate34.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate34.evaluated = { dynamicProps: true, dynamicItems: false };
export const validateAuthorizeCreateSiteInput = validate36;
const schema49 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-create-site/input.json',
  title: 'AuthorizeCreateSiteInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
const schema50 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-create-site/value.json',
  title: 'AuthorizeCreateSiteValue',
  $ref: '../../authorize-hook-result/authorize-hook-result.json',
};
const schema51 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/authorize-hook-result/authorize-hook-result.json',
  title: 'AuthorizeHookResult',
  description:
    'An object indicating whether a user is authorized to perform a specific action. The initial value is determined by the user’s permissions on the platform on which the action is being made.',
  oneOf: [
    { type: 'object', properties: { ok: { const: true } }, required: ['ok'] },
    {
      type: 'object',
      properties: { ok: { const: false }, message: { type: 'string' } },
      required: ['ok', 'message'],
    },
  ],
};
function validate37(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-create-site/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate37.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs1 = errors;
  let valid1 = false;
  let passing0 = null;
  const _errs2 = errors;
  if (errors === _errs2) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.ok === undefined && (missing0 = 'ok')) {
        const err0 = {
          instancePath,
          schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.ok !== undefined) {
          if (true !== data.ok) {
            const err1 = {
              instancePath: instancePath + '/ok',
              schemaPath:
                '../../authorize-hook-result/authorize-hook-result.json/oneOf/0/properties/ok/const',
              keyword: 'const',
              params: { allowedValue: true },
              message: 'must be equal to constant',
            };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
          }
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid0 = _errs2 === errors;
  if (_valid0) {
    valid1 = true;
    passing0 = 0;
    var props0 = {};
    props0.ok = true;
  }
  const _errs5 = errors;
  if (errors === _errs5) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (
        (data.ok === undefined && (missing1 = 'ok')) ||
        (data.message === undefined && (missing1 = 'message'))
      ) {
        const err3 = {
          instancePath,
          schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/required',
          keyword: 'required',
          params: { missingProperty: missing1 },
          message: "must have required property '" + missing1 + "'",
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      } else {
        if (data.ok !== undefined) {
          const _errs7 = errors;
          if (false !== data.ok) {
            const err4 = {
              instancePath: instancePath + '/ok',
              schemaPath:
                '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/properties/ok/const',
              keyword: 'const',
              params: { allowedValue: false },
              message: 'must be equal to constant',
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
          var valid3 = _errs7 === errors;
        } else {
          var valid3 = true;
        }
        if (valid3) {
          if (data.message !== undefined) {
            const _errs8 = errors;
            if (typeof data.message !== 'string') {
              const err5 = {
                instancePath: instancePath + '/message',
                schemaPath:
                  '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/properties/message/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              };
              if (vErrors === null) {
                vErrors = [err5];
              } else {
                vErrors.push(err5);
              }
              errors++;
            }
            var valid3 = _errs8 === errors;
          } else {
            var valid3 = true;
          }
        }
      }
    } else {
      const err6 = {
        instancePath,
        schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err6];
      } else {
        vErrors.push(err6);
      }
      errors++;
    }
  }
  var _valid0 = _errs5 === errors;
  if (_valid0 && valid1) {
    valid1 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid1 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.ok = true;
        props0.message = true;
      }
    }
  }
  if (!valid1) {
    const err7 = {
      instancePath,
      schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err7];
    } else {
      vErrors.push(err7);
    }
    errors++;
    validate37.errors = vErrors;
    return false;
  } else {
    errors = _errs1;
    if (vErrors !== null) {
      if (_errs1) {
        vErrors.length = _errs1;
      } else {
        vErrors = null;
      }
    }
  }
  validate37.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate37.evaluated = { dynamicProps: true, dynamicItems: false };
const schema52 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-create-site/context.json',
  title: 'AuthorizeCreateSiteContext',
  description: 'The context of the request.',
  allOf: [
    { $ref: '../../request-context/principal.json' },
    { $ref: '../../request-context/site.json' },
  ],
};
function validate39(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-create-site/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate39.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  if (
    !validate31(data, { instancePath, parentData, parentDataProperty, rootData, dynamicAnchors })
  ) {
    vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs1 = errors;
    const _errs2 = errors;
    if (errors === _errs2) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        if (data.site !== undefined) {
          let data0 = data.site;
          const _errs4 = errors;
          if (errors === _errs4) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing0;
              if (data0.id === undefined && (missing0 = 'id')) {
                validate39.errors = [
                  {
                    instancePath: instancePath + '/site',
                    schemaPath: '../../request-context/site.json/properties/site/required',
                    keyword: 'required',
                    params: { missingProperty: missing0 },
                    message: "must have required property '" + missing0 + "'",
                  },
                ];
                return false;
              } else {
                if (data0.id !== undefined) {
                  if (typeof data0.id !== 'string') {
                    validate39.errors = [
                      {
                        instancePath: instancePath + '/site/id',
                        schemaPath:
                          '../../request-context/site.json/properties/site/properties/id/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate39.errors = [
                {
                  instancePath: instancePath + '/site',
                  schemaPath: '../../request-context/site.json/properties/site/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
        }
      } else {
        validate39.errors = [
          {
            instancePath,
            schemaPath: '../../request-context/site.json/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object',
          },
        ];
        return false;
      }
    }
    var valid0 = _errs1 === errors;
  }
  validate39.errors = vErrors;
  return errors === 0;
}
validate39.evaluated = {
  props: { site: true, principal: true },
  dynamicProps: false,
  dynamicItems: false,
};
function validate36(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-create-site/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate36.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
        validate36.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate37(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.context !== undefined) {
            const _errs2 = errors;
            if (
              !validate39(data.context, {
                instancePath: instancePath + '/context',
                parentData: data,
                parentDataProperty: 'context',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate36.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate36.errors = vErrors;
  return errors === 0;
}
validate36.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateAuthorizeCreateSiteResult = validate42;
const schema54 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-create-site/result.json',
  title: 'AuthorizeCreateSiteResult',
  type: 'object',
  properties: {
    value: { $ref: './value.json' },
    stop: {
      description:
        'If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.',
      type: ['boolean', 'null'],
    },
  },
  required: ['value'],
};
function validate42(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-create-site/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate42.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.value === undefined && (missing0 = 'value')) {
        validate42.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate37(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.stop !== undefined) {
            let data1 = data.stop;
            const _errs2 = errors;
            if (typeof data1 !== 'boolean' && data1 !== null) {
              validate42.errors = [
                {
                  instancePath: instancePath + '/stop',
                  schemaPath: '#/properties/stop/type',
                  keyword: 'type',
                  params: { type: schema54.properties.stop.type },
                  message: 'must be boolean,null',
                },
              ];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate42.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate42.errors = vErrors;
  return errors === 0;
}
validate42.evaluated = {
  props: { value: true, stop: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateAuthorizeEditSiteInput = validate44;
const schema55 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-edit-site/input.json',
  title: 'AuthorizeEditSiteInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
const schema56 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-edit-site/value.json',
  title: 'AuthorizeEditSiteValue',
  $ref: '../../authorize-hook-result/authorize-hook-result.json',
};
function validate45(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-edit-site/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate45.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs1 = errors;
  let valid1 = false;
  let passing0 = null;
  const _errs2 = errors;
  if (errors === _errs2) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.ok === undefined && (missing0 = 'ok')) {
        const err0 = {
          instancePath,
          schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.ok !== undefined) {
          if (true !== data.ok) {
            const err1 = {
              instancePath: instancePath + '/ok',
              schemaPath:
                '../../authorize-hook-result/authorize-hook-result.json/oneOf/0/properties/ok/const',
              keyword: 'const',
              params: { allowedValue: true },
              message: 'must be equal to constant',
            };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
          }
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid0 = _errs2 === errors;
  if (_valid0) {
    valid1 = true;
    passing0 = 0;
    var props0 = {};
    props0.ok = true;
  }
  const _errs5 = errors;
  if (errors === _errs5) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (
        (data.ok === undefined && (missing1 = 'ok')) ||
        (data.message === undefined && (missing1 = 'message'))
      ) {
        const err3 = {
          instancePath,
          schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/required',
          keyword: 'required',
          params: { missingProperty: missing1 },
          message: "must have required property '" + missing1 + "'",
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      } else {
        if (data.ok !== undefined) {
          const _errs7 = errors;
          if (false !== data.ok) {
            const err4 = {
              instancePath: instancePath + '/ok',
              schemaPath:
                '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/properties/ok/const',
              keyword: 'const',
              params: { allowedValue: false },
              message: 'must be equal to constant',
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
          var valid3 = _errs7 === errors;
        } else {
          var valid3 = true;
        }
        if (valid3) {
          if (data.message !== undefined) {
            const _errs8 = errors;
            if (typeof data.message !== 'string') {
              const err5 = {
                instancePath: instancePath + '/message',
                schemaPath:
                  '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/properties/message/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              };
              if (vErrors === null) {
                vErrors = [err5];
              } else {
                vErrors.push(err5);
              }
              errors++;
            }
            var valid3 = _errs8 === errors;
          } else {
            var valid3 = true;
          }
        }
      }
    } else {
      const err6 = {
        instancePath,
        schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err6];
      } else {
        vErrors.push(err6);
      }
      errors++;
    }
  }
  var _valid0 = _errs5 === errors;
  if (_valid0 && valid1) {
    valid1 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid1 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.ok = true;
        props0.message = true;
      }
    }
  }
  if (!valid1) {
    const err7 = {
      instancePath,
      schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err7];
    } else {
      vErrors.push(err7);
    }
    errors++;
    validate45.errors = vErrors;
    return false;
  } else {
    errors = _errs1;
    if (vErrors !== null) {
      if (_errs1) {
        vErrors.length = _errs1;
      } else {
        vErrors = null;
      }
    }
  }
  validate45.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate45.evaluated = { dynamicProps: true, dynamicItems: false };
const schema58 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-edit-site/context.json',
  title: 'AuthorizeEditSiteContext',
  description: 'The context of the request.',
  allOf: [
    { $ref: '../../request-context/principal.json' },
    { $ref: '../../request-context/site.json' },
    {
      type: 'object',
      properties: {
        input: {
          type: 'object',
          properties: { id: { description: 'The ID of the site being edited.', type: 'string' } },
          required: ['id'],
        },
      },
      required: ['input'],
    },
  ],
};
function validate47(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-edit-site/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate47.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  if (
    !validate31(data, { instancePath, parentData, parentDataProperty, rootData, dynamicAnchors })
  ) {
    vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs1 = errors;
    const _errs2 = errors;
    if (errors === _errs2) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        if (data.site !== undefined) {
          let data0 = data.site;
          const _errs4 = errors;
          if (errors === _errs4) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing0;
              if (data0.id === undefined && (missing0 = 'id')) {
                validate47.errors = [
                  {
                    instancePath: instancePath + '/site',
                    schemaPath: '../../request-context/site.json/properties/site/required',
                    keyword: 'required',
                    params: { missingProperty: missing0 },
                    message: "must have required property '" + missing0 + "'",
                  },
                ];
                return false;
              } else {
                if (data0.id !== undefined) {
                  if (typeof data0.id !== 'string') {
                    validate47.errors = [
                      {
                        instancePath: instancePath + '/site/id',
                        schemaPath:
                          '../../request-context/site.json/properties/site/properties/id/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate47.errors = [
                {
                  instancePath: instancePath + '/site',
                  schemaPath: '../../request-context/site.json/properties/site/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
        }
      } else {
        validate47.errors = [
          {
            instancePath,
            schemaPath: '../../request-context/site.json/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object',
          },
        ];
        return false;
      }
    }
    var valid0 = _errs1 === errors;
    if (valid0) {
      const _errs8 = errors;
      if (errors === _errs8) {
        if (data && typeof data == 'object' && !Array.isArray(data)) {
          let missing1;
          if (data.input === undefined && (missing1 = 'input')) {
            validate47.errors = [
              {
                instancePath,
                schemaPath: '#/allOf/2/required',
                keyword: 'required',
                params: { missingProperty: missing1 },
                message: "must have required property '" + missing1 + "'",
              },
            ];
            return false;
          } else {
            if (data.input !== undefined) {
              let data2 = data.input;
              const _errs10 = errors;
              if (errors === _errs10) {
                if (data2 && typeof data2 == 'object' && !Array.isArray(data2)) {
                  let missing2;
                  if (data2.id === undefined && (missing2 = 'id')) {
                    validate47.errors = [
                      {
                        instancePath: instancePath + '/input',
                        schemaPath: '#/allOf/2/properties/input/required',
                        keyword: 'required',
                        params: { missingProperty: missing2 },
                        message: "must have required property '" + missing2 + "'",
                      },
                    ];
                    return false;
                  } else {
                    if (data2.id !== undefined) {
                      if (typeof data2.id !== 'string') {
                        validate47.errors = [
                          {
                            instancePath: instancePath + '/input/id',
                            schemaPath: '#/allOf/2/properties/input/properties/id/type',
                            keyword: 'type',
                            params: { type: 'string' },
                            message: 'must be string',
                          },
                        ];
                        return false;
                      }
                    }
                  }
                } else {
                  validate47.errors = [
                    {
                      instancePath: instancePath + '/input',
                      schemaPath: '#/allOf/2/properties/input/type',
                      keyword: 'type',
                      params: { type: 'object' },
                      message: 'must be object',
                    },
                  ];
                  return false;
                }
              }
            }
          }
        } else {
          validate47.errors = [
            {
              instancePath,
              schemaPath: '#/allOf/2/type',
              keyword: 'type',
              params: { type: 'object' },
              message: 'must be object',
            },
          ];
          return false;
        }
      }
      var valid0 = _errs8 === errors;
    }
  }
  validate47.errors = vErrors;
  return errors === 0;
}
validate47.evaluated = {
  props: { input: true, site: true, principal: true },
  dynamicProps: false,
  dynamicItems: false,
};
function validate44(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-edit-site/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate44.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
        validate44.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate45(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.context !== undefined) {
            const _errs2 = errors;
            if (
              !validate47(data.context, {
                instancePath: instancePath + '/context',
                parentData: data,
                parentDataProperty: 'context',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate44.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate44.errors = vErrors;
  return errors === 0;
}
validate44.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateAuthorizeEditSiteResult = validate50;
const schema60 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-edit-site/result.json',
  title: 'AuthorizeEditSiteResult',
  type: 'object',
  properties: {
    value: { $ref: './value.json' },
    stop: {
      description:
        'If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.',
      type: ['boolean', 'null'],
    },
  },
  required: ['value'],
};
function validate50(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-edit-site/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate50.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.value === undefined && (missing0 = 'value')) {
        validate50.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate45(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.stop !== undefined) {
            let data1 = data.stop;
            const _errs2 = errors;
            if (typeof data1 !== 'boolean' && data1 !== null) {
              validate50.errors = [
                {
                  instancePath: instancePath + '/stop',
                  schemaPath: '#/properties/stop/type',
                  keyword: 'type',
                  params: { type: schema60.properties.stop.type },
                  message: 'must be boolean,null',
                },
              ];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate50.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate50.errors = vErrors;
  return errors === 0;
}
validate50.evaluated = {
  props: { value: true, stop: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateAuthorizeEditSiteDomainInput = validate52;
const schema61 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-edit-site-domain/input.json',
  title: 'AuthorizeEditSiteDomainInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
const schema62 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-edit-site-domain/value.json',
  title: 'AuthorizeEditSiteDomainValue',
  $ref: '../../authorize-hook-result/authorize-hook-result.json',
};
function validate53(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-edit-site-domain/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate53.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs1 = errors;
  let valid1 = false;
  let passing0 = null;
  const _errs2 = errors;
  if (errors === _errs2) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.ok === undefined && (missing0 = 'ok')) {
        const err0 = {
          instancePath,
          schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.ok !== undefined) {
          if (true !== data.ok) {
            const err1 = {
              instancePath: instancePath + '/ok',
              schemaPath:
                '../../authorize-hook-result/authorize-hook-result.json/oneOf/0/properties/ok/const',
              keyword: 'const',
              params: { allowedValue: true },
              message: 'must be equal to constant',
            };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
          }
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid0 = _errs2 === errors;
  if (_valid0) {
    valid1 = true;
    passing0 = 0;
    var props0 = {};
    props0.ok = true;
  }
  const _errs5 = errors;
  if (errors === _errs5) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (
        (data.ok === undefined && (missing1 = 'ok')) ||
        (data.message === undefined && (missing1 = 'message'))
      ) {
        const err3 = {
          instancePath,
          schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/required',
          keyword: 'required',
          params: { missingProperty: missing1 },
          message: "must have required property '" + missing1 + "'",
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      } else {
        if (data.ok !== undefined) {
          const _errs7 = errors;
          if (false !== data.ok) {
            const err4 = {
              instancePath: instancePath + '/ok',
              schemaPath:
                '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/properties/ok/const',
              keyword: 'const',
              params: { allowedValue: false },
              message: 'must be equal to constant',
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
          var valid3 = _errs7 === errors;
        } else {
          var valid3 = true;
        }
        if (valid3) {
          if (data.message !== undefined) {
            const _errs8 = errors;
            if (typeof data.message !== 'string') {
              const err5 = {
                instancePath: instancePath + '/message',
                schemaPath:
                  '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/properties/message/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              };
              if (vErrors === null) {
                vErrors = [err5];
              } else {
                vErrors.push(err5);
              }
              errors++;
            }
            var valid3 = _errs8 === errors;
          } else {
            var valid3 = true;
          }
        }
      }
    } else {
      const err6 = {
        instancePath,
        schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err6];
      } else {
        vErrors.push(err6);
      }
      errors++;
    }
  }
  var _valid0 = _errs5 === errors;
  if (_valid0 && valid1) {
    valid1 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid1 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.ok = true;
        props0.message = true;
      }
    }
  }
  if (!valid1) {
    const err7 = {
      instancePath,
      schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err7];
    } else {
      vErrors.push(err7);
    }
    errors++;
    validate53.errors = vErrors;
    return false;
  } else {
    errors = _errs1;
    if (vErrors !== null) {
      if (_errs1) {
        vErrors.length = _errs1;
      } else {
        vErrors = null;
      }
    }
  }
  validate53.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate53.evaluated = { dynamicProps: true, dynamicItems: false };
const schema64 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-edit-site-domain/context.json',
  title: 'AuthorizeEditSiteDomainContext',
  description: 'The context of the request. Either adminUser or user will be set.',
  allOf: [
    { $ref: '../../request-context/principal.json' },
    { $ref: '../../request-context/site.json' },
    {
      type: 'object',
      properties: {
        input: {
          type: 'object',
          properties: { id: { description: 'The ID of the site being edited.', type: 'string' } },
          required: ['id'],
        },
      },
      required: ['input'],
    },
  ],
};
function validate55(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-edit-site-domain/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate55.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  if (
    !validate31(data, { instancePath, parentData, parentDataProperty, rootData, dynamicAnchors })
  ) {
    vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs1 = errors;
    const _errs2 = errors;
    if (errors === _errs2) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        if (data.site !== undefined) {
          let data0 = data.site;
          const _errs4 = errors;
          if (errors === _errs4) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing0;
              if (data0.id === undefined && (missing0 = 'id')) {
                validate55.errors = [
                  {
                    instancePath: instancePath + '/site',
                    schemaPath: '../../request-context/site.json/properties/site/required',
                    keyword: 'required',
                    params: { missingProperty: missing0 },
                    message: "must have required property '" + missing0 + "'",
                  },
                ];
                return false;
              } else {
                if (data0.id !== undefined) {
                  if (typeof data0.id !== 'string') {
                    validate55.errors = [
                      {
                        instancePath: instancePath + '/site/id',
                        schemaPath:
                          '../../request-context/site.json/properties/site/properties/id/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate55.errors = [
                {
                  instancePath: instancePath + '/site',
                  schemaPath: '../../request-context/site.json/properties/site/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
        }
      } else {
        validate55.errors = [
          {
            instancePath,
            schemaPath: '../../request-context/site.json/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object',
          },
        ];
        return false;
      }
    }
    var valid0 = _errs1 === errors;
    if (valid0) {
      const _errs8 = errors;
      if (errors === _errs8) {
        if (data && typeof data == 'object' && !Array.isArray(data)) {
          let missing1;
          if (data.input === undefined && (missing1 = 'input')) {
            validate55.errors = [
              {
                instancePath,
                schemaPath: '#/allOf/2/required',
                keyword: 'required',
                params: { missingProperty: missing1 },
                message: "must have required property '" + missing1 + "'",
              },
            ];
            return false;
          } else {
            if (data.input !== undefined) {
              let data2 = data.input;
              const _errs10 = errors;
              if (errors === _errs10) {
                if (data2 && typeof data2 == 'object' && !Array.isArray(data2)) {
                  let missing2;
                  if (data2.id === undefined && (missing2 = 'id')) {
                    validate55.errors = [
                      {
                        instancePath: instancePath + '/input',
                        schemaPath: '#/allOf/2/properties/input/required',
                        keyword: 'required',
                        params: { missingProperty: missing2 },
                        message: "must have required property '" + missing2 + "'",
                      },
                    ];
                    return false;
                  } else {
                    if (data2.id !== undefined) {
                      if (typeof data2.id !== 'string') {
                        validate55.errors = [
                          {
                            instancePath: instancePath + '/input/id',
                            schemaPath: '#/allOf/2/properties/input/properties/id/type',
                            keyword: 'type',
                            params: { type: 'string' },
                            message: 'must be string',
                          },
                        ];
                        return false;
                      }
                    }
                  }
                } else {
                  validate55.errors = [
                    {
                      instancePath: instancePath + '/input',
                      schemaPath: '#/allOf/2/properties/input/type',
                      keyword: 'type',
                      params: { type: 'object' },
                      message: 'must be object',
                    },
                  ];
                  return false;
                }
              }
            }
          }
        } else {
          validate55.errors = [
            {
              instancePath,
              schemaPath: '#/allOf/2/type',
              keyword: 'type',
              params: { type: 'object' },
              message: 'must be object',
            },
          ];
          return false;
        }
      }
      var valid0 = _errs8 === errors;
    }
  }
  validate55.errors = vErrors;
  return errors === 0;
}
validate55.evaluated = {
  props: { input: true, site: true, principal: true },
  dynamicProps: false,
  dynamicItems: false,
};
function validate52(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-edit-site-domain/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate52.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
        validate52.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate53(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.context !== undefined) {
            const _errs2 = errors;
            if (
              !validate55(data.context, {
                instancePath: instancePath + '/context',
                parentData: data,
                parentDataProperty: 'context',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate52.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate52.errors = vErrors;
  return errors === 0;
}
validate52.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateAuthorizeEditSiteDomainResult = validate58;
const schema66 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-edit-site-domain/result.json',
  title: 'AuthorizeEditSiteDomainResult',
  type: 'object',
  properties: {
    value: { $ref: './value.json' },
    stop: {
      description:
        'If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.',
      type: ['boolean', 'null'],
    },
  },
  required: ['value'],
};
function validate58(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-edit-site-domain/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate58.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.value === undefined && (missing0 = 'value')) {
        validate58.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate53(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.stop !== undefined) {
            let data1 = data.stop;
            const _errs2 = errors;
            if (typeof data1 !== 'boolean' && data1 !== null) {
              validate58.errors = [
                {
                  instancePath: instancePath + '/stop',
                  schemaPath: '#/properties/stop/type',
                  keyword: 'type',
                  params: { type: schema66.properties.stop.type },
                  message: 'must be boolean,null',
                },
              ];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate58.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate58.errors = vErrors;
  return errors === 0;
}
validate58.evaluated = {
  props: { value: true, stop: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateBeforeCreateSiteInput = validate60;
const schema67 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-create-site/input.json',
  title: 'BeforeCreateSiteInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
const schema68 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-create-site/value.json',
  title: 'BeforeCreateSiteValue',
  type: 'object',
  properties: {
    name: { type: 'string' },
    domain: { type: 'string' },
    orgId: { type: 'string', description: 'The ID of the org that will own the site.' },
    customFields: { type: 'array', items: { $ref: '../../custom-field/custom-field.json' } },
  },
  required: ['name', 'customFields'],
};
const schema69 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/custom-field/custom-field.json',
  title: 'CustomField',
  oneOf: [
    {
      title: 'BooleanCustomField',
      type: 'object',
      properties: {
        type: { const: 'Boolean' },
        key: { type: 'string' },
        value: { type: 'boolean' },
      },
      required: ['type', 'key', 'value'],
    },
    {
      title: 'IntCustomField',
      type: 'object',
      properties: { type: { const: 'Int' }, key: { type: 'string' }, value: { type: 'integer' } },
      required: ['type', 'key', 'value'],
    },
    {
      title: 'RichTextCustomField',
      type: 'object',
      properties: {
        type: { const: 'RichText' },
        key: { type: 'string' },
        value: { $ref: 'rich-text.json' },
      },
      required: ['type', 'key', 'value'],
    },
    {
      title: 'StringCustomField',
      type: 'object',
      properties: { type: { const: 'String' }, key: { type: 'string' }, value: { type: 'string' } },
      required: ['type', 'key', 'value'],
    },
    {
      title: 'OptionalBooleanCustomField',
      type: 'object',
      properties: {
        type: { const: 'OptionalBoolean' },
        key: { type: 'string' },
        value: { oneOf: [{ type: 'boolean' }, { type: 'null' }] },
      },
      required: ['type', 'key', 'value'],
    },
    {
      title: 'OptionalIntCustomField',
      type: 'object',
      properties: {
        type: { const: 'OptionalInt' },
        key: { type: 'string' },
        value: { oneOf: [{ type: 'integer' }, { type: 'null' }] },
      },
      required: ['type', 'key', 'value'],
    },
    {
      title: 'OptionalRichTextCustomField',
      type: 'object',
      properties: {
        type: { const: 'OptionalRichText' },
        key: { type: 'string' },
        value: { oneOf: [{ $ref: 'rich-text.json' }, { type: 'null' }] },
      },
      required: ['type', 'key', 'value'],
    },
    {
      title: 'OptionalStringCustomField',
      type: 'object',
      properties: {
        type: { const: 'OptionalString' },
        key: { type: 'string' },
        value: { oneOf: [{ type: 'string' }, { type: 'null' }] },
      },
      required: ['type', 'key', 'value'],
    },
  ],
};
function validate62(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/custom-field/custom-field.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate62.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.type === undefined && (missing0 = 'type')) ||
        (data.key === undefined && (missing0 = 'key')) ||
        (data.value === undefined && (missing0 = 'value'))
      ) {
        const err0 = {
          instancePath,
          schemaPath: '#/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.type !== undefined) {
          const _errs3 = errors;
          if ('Boolean' !== data.type) {
            const err1 = {
              instancePath: instancePath + '/type',
              schemaPath: '#/oneOf/0/properties/type/const',
              keyword: 'const',
              params: { allowedValue: 'Boolean' },
              message: 'must be equal to constant',
            };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.key !== undefined) {
            const _errs4 = errors;
            if (typeof data.key !== 'string') {
              const err2 = {
                instancePath: instancePath + '/key',
                schemaPath: '#/oneOf/0/properties/key/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
          if (valid1) {
            if (data.value !== undefined) {
              const _errs6 = errors;
              if (typeof data.value !== 'boolean') {
                const err3 = {
                  instancePath: instancePath + '/value',
                  schemaPath: '#/oneOf/0/properties/value/type',
                  keyword: 'type',
                  params: { type: 'boolean' },
                  message: 'must be boolean',
                };
                if (vErrors === null) {
                  vErrors = [err3];
                } else {
                  vErrors.push(err3);
                }
                errors++;
              }
              var valid1 = _errs6 === errors;
            } else {
              var valid1 = true;
            }
          }
        }
      }
    } else {
      const err4 = {
        instancePath,
        schemaPath: '#/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
    var props0 = {};
    props0.type = true;
    props0.key = true;
    props0.value = true;
  }
  const _errs8 = errors;
  if (errors === _errs8) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (
        (data.type === undefined && (missing1 = 'type')) ||
        (data.key === undefined && (missing1 = 'key')) ||
        (data.value === undefined && (missing1 = 'value'))
      ) {
        const err5 = {
          instancePath,
          schemaPath: '#/oneOf/1/required',
          keyword: 'required',
          params: { missingProperty: missing1 },
          message: "must have required property '" + missing1 + "'",
        };
        if (vErrors === null) {
          vErrors = [err5];
        } else {
          vErrors.push(err5);
        }
        errors++;
      } else {
        if (data.type !== undefined) {
          const _errs10 = errors;
          if ('Int' !== data.type) {
            const err6 = {
              instancePath: instancePath + '/type',
              schemaPath: '#/oneOf/1/properties/type/const',
              keyword: 'const',
              params: { allowedValue: 'Int' },
              message: 'must be equal to constant',
            };
            if (vErrors === null) {
              vErrors = [err6];
            } else {
              vErrors.push(err6);
            }
            errors++;
          }
          var valid2 = _errs10 === errors;
        } else {
          var valid2 = true;
        }
        if (valid2) {
          if (data.key !== undefined) {
            const _errs11 = errors;
            if (typeof data.key !== 'string') {
              const err7 = {
                instancePath: instancePath + '/key',
                schemaPath: '#/oneOf/1/properties/key/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              };
              if (vErrors === null) {
                vErrors = [err7];
              } else {
                vErrors.push(err7);
              }
              errors++;
            }
            var valid2 = _errs11 === errors;
          } else {
            var valid2 = true;
          }
          if (valid2) {
            if (data.value !== undefined) {
              let data5 = data.value;
              const _errs13 = errors;
              if (!(typeof data5 == 'number' && !(data5 % 1) && !isNaN(data5) && isFinite(data5))) {
                const err8 = {
                  instancePath: instancePath + '/value',
                  schemaPath: '#/oneOf/1/properties/value/type',
                  keyword: 'type',
                  params: { type: 'integer' },
                  message: 'must be integer',
                };
                if (vErrors === null) {
                  vErrors = [err8];
                } else {
                  vErrors.push(err8);
                }
                errors++;
              }
              var valid2 = _errs13 === errors;
            } else {
              var valid2 = true;
            }
          }
        }
      }
    } else {
      const err9 = {
        instancePath,
        schemaPath: '#/oneOf/1/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err9];
      } else {
        vErrors.push(err9);
      }
      errors++;
    }
  }
  var _valid0 = _errs8 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.type = true;
        props0.key = true;
        props0.value = true;
      }
    }
    const _errs15 = errors;
    if (errors === _errs15) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        let missing2;
        if (
          (data.type === undefined && (missing2 = 'type')) ||
          (data.key === undefined && (missing2 = 'key')) ||
          (data.value === undefined && (missing2 = 'value'))
        ) {
          const err10 = {
            instancePath,
            schemaPath: '#/oneOf/2/required',
            keyword: 'required',
            params: { missingProperty: missing2 },
            message: "must have required property '" + missing2 + "'",
          };
          if (vErrors === null) {
            vErrors = [err10];
          } else {
            vErrors.push(err10);
          }
          errors++;
        } else {
          if (data.type !== undefined) {
            const _errs17 = errors;
            if ('RichText' !== data.type) {
              const err11 = {
                instancePath: instancePath + '/type',
                schemaPath: '#/oneOf/2/properties/type/const',
                keyword: 'const',
                params: { allowedValue: 'RichText' },
                message: 'must be equal to constant',
              };
              if (vErrors === null) {
                vErrors = [err11];
              } else {
                vErrors.push(err11);
              }
              errors++;
            }
            var valid3 = _errs17 === errors;
          } else {
            var valid3 = true;
          }
          if (valid3) {
            if (data.key !== undefined) {
              const _errs18 = errors;
              if (typeof data.key !== 'string') {
                const err12 = {
                  instancePath: instancePath + '/key',
                  schemaPath: '#/oneOf/2/properties/key/type',
                  keyword: 'type',
                  params: { type: 'string' },
                  message: 'must be string',
                };
                if (vErrors === null) {
                  vErrors = [err12];
                } else {
                  vErrors.push(err12);
                }
                errors++;
              }
              var valid3 = _errs18 === errors;
            } else {
              var valid3 = true;
            }
            if (valid3) {
              if (data.value !== undefined) {
                let data8 = data.value;
                const _errs20 = errors;
                const _errs22 = errors;
                let valid5 = false;
                let passing1 = null;
                const _errs23 = errors;
                if (errors === _errs23) {
                  if (data8 && typeof data8 == 'object' && !Array.isArray(data8)) {
                    let missing3;
                    if (data8.delta === undefined && (missing3 = 'delta')) {
                      const err13 = {
                        instancePath: instancePath + '/value',
                        schemaPath: 'rich-text.json/oneOf/0/required',
                        keyword: 'required',
                        params: { missingProperty: missing3 },
                        message: "must have required property '" + missing3 + "'",
                      };
                      if (vErrors === null) {
                        vErrors = [err13];
                      } else {
                        vErrors.push(err13);
                      }
                      errors++;
                    } else {
                      if (data8.delta !== undefined) {
                        let data9 = data8.delta;
                        const _errs25 = errors;
                        if (errors === _errs25) {
                          if (data9 && typeof data9 == 'object' && !Array.isArray(data9)) {
                            let missing4;
                            if (data9.ops === undefined && (missing4 = 'ops')) {
                              const err14 = {
                                instancePath: instancePath + '/value/delta',
                                schemaPath: 'rich-text.json/oneOf/0/properties/delta/required',
                                keyword: 'required',
                                params: { missingProperty: missing4 },
                                message: "must have required property '" + missing4 + "'",
                              };
                              if (vErrors === null) {
                                vErrors = [err14];
                              } else {
                                vErrors.push(err14);
                              }
                              errors++;
                            } else {
                              if (data9.ops !== undefined) {
                                let data10 = data9.ops;
                                const _errs27 = errors;
                                if (errors === _errs27) {
                                  if (Array.isArray(data10)) {
                                    var valid8 = true;
                                    const len0 = data10.length;
                                    for (let i0 = 0; i0 < len0; i0++) {
                                      let data11 = data10[i0];
                                      const _errs29 = errors;
                                      if (errors === _errs29) {
                                        if (
                                          data11 &&
                                          typeof data11 == 'object' &&
                                          !Array.isArray(data11)
                                        ) {
                                          let missing5;
                                          if (
                                            data11.insert === undefined &&
                                            (missing5 = 'insert')
                                          ) {
                                            const err15 = {
                                              instancePath: instancePath + '/value/delta/ops/' + i0,
                                              schemaPath:
                                                'rich-text.json/oneOf/0/properties/delta/properties/ops/items/required',
                                              keyword: 'required',
                                              params: { missingProperty: missing5 },
                                              message:
                                                "must have required property '" + missing5 + "'",
                                            };
                                            if (vErrors === null) {
                                              vErrors = [err15];
                                            } else {
                                              vErrors.push(err15);
                                            }
                                            errors++;
                                          } else {
                                            if (data11.insert !== undefined) {
                                              let data12 = data11.insert;
                                              const _errs31 = errors;
                                              const _errs32 = errors;
                                              let valid10 = false;
                                              let passing2 = null;
                                              const _errs33 = errors;
                                              if (typeof data12 !== 'string') {
                                                const err16 = {
                                                  instancePath:
                                                    instancePath +
                                                    '/value/delta/ops/' +
                                                    i0 +
                                                    '/insert',
                                                  schemaPath:
                                                    'rich-text.json/oneOf/0/properties/delta/properties/ops/items/properties/insert/oneOf/0/type',
                                                  keyword: 'type',
                                                  params: { type: 'string' },
                                                  message: 'must be string',
                                                };
                                                if (vErrors === null) {
                                                  vErrors = [err16];
                                                } else {
                                                  vErrors.push(err16);
                                                }
                                                errors++;
                                              }
                                              var _valid2 = _errs33 === errors;
                                              if (_valid2) {
                                                valid10 = true;
                                                passing2 = 0;
                                              }
                                              const _errs35 = errors;
                                              if (
                                                !(
                                                  data12 &&
                                                  typeof data12 == 'object' &&
                                                  !Array.isArray(data12)
                                                )
                                              ) {
                                                const err17 = {
                                                  instancePath:
                                                    instancePath +
                                                    '/value/delta/ops/' +
                                                    i0 +
                                                    '/insert',
                                                  schemaPath:
                                                    'rich-text.json/oneOf/0/properties/delta/properties/ops/items/properties/insert/oneOf/1/type',
                                                  keyword: 'type',
                                                  params: { type: 'object' },
                                                  message: 'must be object',
                                                };
                                                if (vErrors === null) {
                                                  vErrors = [err17];
                                                } else {
                                                  vErrors.push(err17);
                                                }
                                                errors++;
                                              }
                                              var _valid2 = _errs35 === errors;
                                              if (_valid2 && valid10) {
                                                valid10 = false;
                                                passing2 = [passing2, 1];
                                              } else {
                                                if (_valid2) {
                                                  valid10 = true;
                                                  passing2 = 1;
                                                }
                                              }
                                              if (!valid10) {
                                                const err18 = {
                                                  instancePath:
                                                    instancePath +
                                                    '/value/delta/ops/' +
                                                    i0 +
                                                    '/insert',
                                                  schemaPath:
                                                    'rich-text.json/oneOf/0/properties/delta/properties/ops/items/properties/insert/oneOf',
                                                  keyword: 'oneOf',
                                                  params: { passingSchemas: passing2 },
                                                  message: 'must match exactly one schema in oneOf',
                                                };
                                                if (vErrors === null) {
                                                  vErrors = [err18];
                                                } else {
                                                  vErrors.push(err18);
                                                }
                                                errors++;
                                              } else {
                                                errors = _errs32;
                                                if (vErrors !== null) {
                                                  if (_errs32) {
                                                    vErrors.length = _errs32;
                                                  } else {
                                                    vErrors = null;
                                                  }
                                                }
                                              }
                                              var valid9 = _errs31 === errors;
                                            } else {
                                              var valid9 = true;
                                            }
                                            if (valid9) {
                                              if (data11.attributes !== undefined) {
                                                let data13 = data11.attributes;
                                                const _errs37 = errors;
                                                if (
                                                  !(
                                                    data13 &&
                                                    typeof data13 == 'object' &&
                                                    !Array.isArray(data13)
                                                  )
                                                ) {
                                                  const err19 = {
                                                    instancePath:
                                                      instancePath +
                                                      '/value/delta/ops/' +
                                                      i0 +
                                                      '/attributes',
                                                    schemaPath:
                                                      'rich-text.json/oneOf/0/properties/delta/properties/ops/items/properties/attributes/type',
                                                    keyword: 'type',
                                                    params: { type: 'object' },
                                                    message: 'must be object',
                                                  };
                                                  if (vErrors === null) {
                                                    vErrors = [err19];
                                                  } else {
                                                    vErrors.push(err19);
                                                  }
                                                  errors++;
                                                }
                                                var valid9 = _errs37 === errors;
                                              } else {
                                                var valid9 = true;
                                              }
                                            }
                                          }
                                        } else {
                                          const err20 = {
                                            instancePath: instancePath + '/value/delta/ops/' + i0,
                                            schemaPath:
                                              'rich-text.json/oneOf/0/properties/delta/properties/ops/items/type',
                                            keyword: 'type',
                                            params: { type: 'object' },
                                            message: 'must be object',
                                          };
                                          if (vErrors === null) {
                                            vErrors = [err20];
                                          } else {
                                            vErrors.push(err20);
                                          }
                                          errors++;
                                        }
                                      }
                                      var valid8 = _errs29 === errors;
                                      if (!valid8) {
                                        break;
                                      }
                                    }
                                  } else {
                                    const err21 = {
                                      instancePath: instancePath + '/value/delta/ops',
                                      schemaPath:
                                        'rich-text.json/oneOf/0/properties/delta/properties/ops/type',
                                      keyword: 'type',
                                      params: { type: 'array' },
                                      message: 'must be array',
                                    };
                                    if (vErrors === null) {
                                      vErrors = [err21];
                                    } else {
                                      vErrors.push(err21);
                                    }
                                    errors++;
                                  }
                                }
                              }
                            }
                          } else {
                            const err22 = {
                              instancePath: instancePath + '/value/delta',
                              schemaPath: 'rich-text.json/oneOf/0/properties/delta/type',
                              keyword: 'type',
                              params: { type: 'object' },
                              message: 'must be object',
                            };
                            if (vErrors === null) {
                              vErrors = [err22];
                            } else {
                              vErrors.push(err22);
                            }
                            errors++;
                          }
                        }
                      }
                    }
                  } else {
                    const err23 = {
                      instancePath: instancePath + '/value',
                      schemaPath: 'rich-text.json/oneOf/0/type',
                      keyword: 'type',
                      params: { type: 'object' },
                      message: 'must be object',
                    };
                    if (vErrors === null) {
                      vErrors = [err23];
                    } else {
                      vErrors.push(err23);
                    }
                    errors++;
                  }
                }
                var _valid1 = _errs23 === errors;
                if (_valid1) {
                  valid5 = true;
                  passing1 = 0;
                  var props1 = {};
                  props1.delta = true;
                }
                if (!valid5) {
                  const err24 = {
                    instancePath: instancePath + '/value',
                    schemaPath: 'rich-text.json/oneOf',
                    keyword: 'oneOf',
                    params: { passingSchemas: passing1 },
                    message: 'must match exactly one schema in oneOf',
                  };
                  if (vErrors === null) {
                    vErrors = [err24];
                  } else {
                    vErrors.push(err24);
                  }
                  errors++;
                } else {
                  errors = _errs22;
                  if (vErrors !== null) {
                    if (_errs22) {
                      vErrors.length = _errs22;
                    } else {
                      vErrors = null;
                    }
                  }
                }
                var valid3 = _errs20 === errors;
              } else {
                var valid3 = true;
              }
            }
          }
        }
      } else {
        const err25 = {
          instancePath,
          schemaPath: '#/oneOf/2/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        };
        if (vErrors === null) {
          vErrors = [err25];
        } else {
          vErrors.push(err25);
        }
        errors++;
      }
    }
    var _valid0 = _errs15 === errors;
    if (_valid0 && valid0) {
      valid0 = false;
      passing0 = [passing0, 2];
    } else {
      if (_valid0) {
        valid0 = true;
        passing0 = 2;
        if (props0 !== true) {
          props0 = props0 || {};
          props0.type = true;
          props0.key = true;
          props0.value = true;
        }
      }
      const _errs39 = errors;
      if (errors === _errs39) {
        if (data && typeof data == 'object' && !Array.isArray(data)) {
          let missing6;
          if (
            (data.type === undefined && (missing6 = 'type')) ||
            (data.key === undefined && (missing6 = 'key')) ||
            (data.value === undefined && (missing6 = 'value'))
          ) {
            const err26 = {
              instancePath,
              schemaPath: '#/oneOf/3/required',
              keyword: 'required',
              params: { missingProperty: missing6 },
              message: "must have required property '" + missing6 + "'",
            };
            if (vErrors === null) {
              vErrors = [err26];
            } else {
              vErrors.push(err26);
            }
            errors++;
          } else {
            if (data.type !== undefined) {
              const _errs41 = errors;
              if ('String' !== data.type) {
                const err27 = {
                  instancePath: instancePath + '/type',
                  schemaPath: '#/oneOf/3/properties/type/const',
                  keyword: 'const',
                  params: { allowedValue: 'String' },
                  message: 'must be equal to constant',
                };
                if (vErrors === null) {
                  vErrors = [err27];
                } else {
                  vErrors.push(err27);
                }
                errors++;
              }
              var valid11 = _errs41 === errors;
            } else {
              var valid11 = true;
            }
            if (valid11) {
              if (data.key !== undefined) {
                const _errs42 = errors;
                if (typeof data.key !== 'string') {
                  const err28 = {
                    instancePath: instancePath + '/key',
                    schemaPath: '#/oneOf/3/properties/key/type',
                    keyword: 'type',
                    params: { type: 'string' },
                    message: 'must be string',
                  };
                  if (vErrors === null) {
                    vErrors = [err28];
                  } else {
                    vErrors.push(err28);
                  }
                  errors++;
                }
                var valid11 = _errs42 === errors;
              } else {
                var valid11 = true;
              }
              if (valid11) {
                if (data.value !== undefined) {
                  const _errs44 = errors;
                  if (typeof data.value !== 'string') {
                    const err29 = {
                      instancePath: instancePath + '/value',
                      schemaPath: '#/oneOf/3/properties/value/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    };
                    if (vErrors === null) {
                      vErrors = [err29];
                    } else {
                      vErrors.push(err29);
                    }
                    errors++;
                  }
                  var valid11 = _errs44 === errors;
                } else {
                  var valid11 = true;
                }
              }
            }
          }
        } else {
          const err30 = {
            instancePath,
            schemaPath: '#/oneOf/3/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object',
          };
          if (vErrors === null) {
            vErrors = [err30];
          } else {
            vErrors.push(err30);
          }
          errors++;
        }
      }
      var _valid0 = _errs39 === errors;
      if (_valid0 && valid0) {
        valid0 = false;
        passing0 = [passing0, 3];
      } else {
        if (_valid0) {
          valid0 = true;
          passing0 = 3;
          if (props0 !== true) {
            props0 = props0 || {};
            props0.type = true;
            props0.key = true;
            props0.value = true;
          }
        }
        const _errs46 = errors;
        if (errors === _errs46) {
          if (data && typeof data == 'object' && !Array.isArray(data)) {
            let missing7;
            if (
              (data.type === undefined && (missing7 = 'type')) ||
              (data.key === undefined && (missing7 = 'key')) ||
              (data.value === undefined && (missing7 = 'value'))
            ) {
              const err31 = {
                instancePath,
                schemaPath: '#/oneOf/4/required',
                keyword: 'required',
                params: { missingProperty: missing7 },
                message: "must have required property '" + missing7 + "'",
              };
              if (vErrors === null) {
                vErrors = [err31];
              } else {
                vErrors.push(err31);
              }
              errors++;
            } else {
              if (data.type !== undefined) {
                const _errs48 = errors;
                if ('OptionalBoolean' !== data.type) {
                  const err32 = {
                    instancePath: instancePath + '/type',
                    schemaPath: '#/oneOf/4/properties/type/const',
                    keyword: 'const',
                    params: { allowedValue: 'OptionalBoolean' },
                    message: 'must be equal to constant',
                  };
                  if (vErrors === null) {
                    vErrors = [err32];
                  } else {
                    vErrors.push(err32);
                  }
                  errors++;
                }
                var valid12 = _errs48 === errors;
              } else {
                var valid12 = true;
              }
              if (valid12) {
                if (data.key !== undefined) {
                  const _errs49 = errors;
                  if (typeof data.key !== 'string') {
                    const err33 = {
                      instancePath: instancePath + '/key',
                      schemaPath: '#/oneOf/4/properties/key/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    };
                    if (vErrors === null) {
                      vErrors = [err33];
                    } else {
                      vErrors.push(err33);
                    }
                    errors++;
                  }
                  var valid12 = _errs49 === errors;
                } else {
                  var valid12 = true;
                }
                if (valid12) {
                  if (data.value !== undefined) {
                    let data19 = data.value;
                    const _errs51 = errors;
                    const _errs52 = errors;
                    let valid13 = false;
                    let passing3 = null;
                    const _errs53 = errors;
                    if (typeof data19 !== 'boolean') {
                      const err34 = {
                        instancePath: instancePath + '/value',
                        schemaPath: '#/oneOf/4/properties/value/oneOf/0/type',
                        keyword: 'type',
                        params: { type: 'boolean' },
                        message: 'must be boolean',
                      };
                      if (vErrors === null) {
                        vErrors = [err34];
                      } else {
                        vErrors.push(err34);
                      }
                      errors++;
                    }
                    var _valid3 = _errs53 === errors;
                    if (_valid3) {
                      valid13 = true;
                      passing3 = 0;
                    }
                    const _errs55 = errors;
                    if (data19 !== null) {
                      const err35 = {
                        instancePath: instancePath + '/value',
                        schemaPath: '#/oneOf/4/properties/value/oneOf/1/type',
                        keyword: 'type',
                        params: { type: 'null' },
                        message: 'must be null',
                      };
                      if (vErrors === null) {
                        vErrors = [err35];
                      } else {
                        vErrors.push(err35);
                      }
                      errors++;
                    }
                    var _valid3 = _errs55 === errors;
                    if (_valid3 && valid13) {
                      valid13 = false;
                      passing3 = [passing3, 1];
                    } else {
                      if (_valid3) {
                        valid13 = true;
                        passing3 = 1;
                      }
                    }
                    if (!valid13) {
                      const err36 = {
                        instancePath: instancePath + '/value',
                        schemaPath: '#/oneOf/4/properties/value/oneOf',
                        keyword: 'oneOf',
                        params: { passingSchemas: passing3 },
                        message: 'must match exactly one schema in oneOf',
                      };
                      if (vErrors === null) {
                        vErrors = [err36];
                      } else {
                        vErrors.push(err36);
                      }
                      errors++;
                    } else {
                      errors = _errs52;
                      if (vErrors !== null) {
                        if (_errs52) {
                          vErrors.length = _errs52;
                        } else {
                          vErrors = null;
                        }
                      }
                    }
                    var valid12 = _errs51 === errors;
                  } else {
                    var valid12 = true;
                  }
                }
              }
            }
          } else {
            const err37 = {
              instancePath,
              schemaPath: '#/oneOf/4/type',
              keyword: 'type',
              params: { type: 'object' },
              message: 'must be object',
            };
            if (vErrors === null) {
              vErrors = [err37];
            } else {
              vErrors.push(err37);
            }
            errors++;
          }
        }
        var _valid0 = _errs46 === errors;
        if (_valid0 && valid0) {
          valid0 = false;
          passing0 = [passing0, 4];
        } else {
          if (_valid0) {
            valid0 = true;
            passing0 = 4;
            if (props0 !== true) {
              props0 = props0 || {};
              props0.type = true;
              props0.key = true;
              props0.value = true;
            }
          }
          const _errs57 = errors;
          if (errors === _errs57) {
            if (data && typeof data == 'object' && !Array.isArray(data)) {
              let missing8;
              if (
                (data.type === undefined && (missing8 = 'type')) ||
                (data.key === undefined && (missing8 = 'key')) ||
                (data.value === undefined && (missing8 = 'value'))
              ) {
                const err38 = {
                  instancePath,
                  schemaPath: '#/oneOf/5/required',
                  keyword: 'required',
                  params: { missingProperty: missing8 },
                  message: "must have required property '" + missing8 + "'",
                };
                if (vErrors === null) {
                  vErrors = [err38];
                } else {
                  vErrors.push(err38);
                }
                errors++;
              } else {
                if (data.type !== undefined) {
                  const _errs59 = errors;
                  if ('OptionalInt' !== data.type) {
                    const err39 = {
                      instancePath: instancePath + '/type',
                      schemaPath: '#/oneOf/5/properties/type/const',
                      keyword: 'const',
                      params: { allowedValue: 'OptionalInt' },
                      message: 'must be equal to constant',
                    };
                    if (vErrors === null) {
                      vErrors = [err39];
                    } else {
                      vErrors.push(err39);
                    }
                    errors++;
                  }
                  var valid14 = _errs59 === errors;
                } else {
                  var valid14 = true;
                }
                if (valid14) {
                  if (data.key !== undefined) {
                    const _errs60 = errors;
                    if (typeof data.key !== 'string') {
                      const err40 = {
                        instancePath: instancePath + '/key',
                        schemaPath: '#/oneOf/5/properties/key/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      };
                      if (vErrors === null) {
                        vErrors = [err40];
                      } else {
                        vErrors.push(err40);
                      }
                      errors++;
                    }
                    var valid14 = _errs60 === errors;
                  } else {
                    var valid14 = true;
                  }
                  if (valid14) {
                    if (data.value !== undefined) {
                      let data22 = data.value;
                      const _errs62 = errors;
                      const _errs63 = errors;
                      let valid15 = false;
                      let passing4 = null;
                      const _errs64 = errors;
                      if (
                        !(
                          typeof data22 == 'number' &&
                          !(data22 % 1) &&
                          !isNaN(data22) &&
                          isFinite(data22)
                        )
                      ) {
                        const err41 = {
                          instancePath: instancePath + '/value',
                          schemaPath: '#/oneOf/5/properties/value/oneOf/0/type',
                          keyword: 'type',
                          params: { type: 'integer' },
                          message: 'must be integer',
                        };
                        if (vErrors === null) {
                          vErrors = [err41];
                        } else {
                          vErrors.push(err41);
                        }
                        errors++;
                      }
                      var _valid4 = _errs64 === errors;
                      if (_valid4) {
                        valid15 = true;
                        passing4 = 0;
                      }
                      const _errs66 = errors;
                      if (data22 !== null) {
                        const err42 = {
                          instancePath: instancePath + '/value',
                          schemaPath: '#/oneOf/5/properties/value/oneOf/1/type',
                          keyword: 'type',
                          params: { type: 'null' },
                          message: 'must be null',
                        };
                        if (vErrors === null) {
                          vErrors = [err42];
                        } else {
                          vErrors.push(err42);
                        }
                        errors++;
                      }
                      var _valid4 = _errs66 === errors;
                      if (_valid4 && valid15) {
                        valid15 = false;
                        passing4 = [passing4, 1];
                      } else {
                        if (_valid4) {
                          valid15 = true;
                          passing4 = 1;
                        }
                      }
                      if (!valid15) {
                        const err43 = {
                          instancePath: instancePath + '/value',
                          schemaPath: '#/oneOf/5/properties/value/oneOf',
                          keyword: 'oneOf',
                          params: { passingSchemas: passing4 },
                          message: 'must match exactly one schema in oneOf',
                        };
                        if (vErrors === null) {
                          vErrors = [err43];
                        } else {
                          vErrors.push(err43);
                        }
                        errors++;
                      } else {
                        errors = _errs63;
                        if (vErrors !== null) {
                          if (_errs63) {
                            vErrors.length = _errs63;
                          } else {
                            vErrors = null;
                          }
                        }
                      }
                      var valid14 = _errs62 === errors;
                    } else {
                      var valid14 = true;
                    }
                  }
                }
              }
            } else {
              const err44 = {
                instancePath,
                schemaPath: '#/oneOf/5/type',
                keyword: 'type',
                params: { type: 'object' },
                message: 'must be object',
              };
              if (vErrors === null) {
                vErrors = [err44];
              } else {
                vErrors.push(err44);
              }
              errors++;
            }
          }
          var _valid0 = _errs57 === errors;
          if (_valid0 && valid0) {
            valid0 = false;
            passing0 = [passing0, 5];
          } else {
            if (_valid0) {
              valid0 = true;
              passing0 = 5;
              if (props0 !== true) {
                props0 = props0 || {};
                props0.type = true;
                props0.key = true;
                props0.value = true;
              }
            }
            const _errs68 = errors;
            if (errors === _errs68) {
              if (data && typeof data == 'object' && !Array.isArray(data)) {
                let missing9;
                if (
                  (data.type === undefined && (missing9 = 'type')) ||
                  (data.key === undefined && (missing9 = 'key')) ||
                  (data.value === undefined && (missing9 = 'value'))
                ) {
                  const err45 = {
                    instancePath,
                    schemaPath: '#/oneOf/6/required',
                    keyword: 'required',
                    params: { missingProperty: missing9 },
                    message: "must have required property '" + missing9 + "'",
                  };
                  if (vErrors === null) {
                    vErrors = [err45];
                  } else {
                    vErrors.push(err45);
                  }
                  errors++;
                } else {
                  if (data.type !== undefined) {
                    const _errs70 = errors;
                    if ('OptionalRichText' !== data.type) {
                      const err46 = {
                        instancePath: instancePath + '/type',
                        schemaPath: '#/oneOf/6/properties/type/const',
                        keyword: 'const',
                        params: { allowedValue: 'OptionalRichText' },
                        message: 'must be equal to constant',
                      };
                      if (vErrors === null) {
                        vErrors = [err46];
                      } else {
                        vErrors.push(err46);
                      }
                      errors++;
                    }
                    var valid16 = _errs70 === errors;
                  } else {
                    var valid16 = true;
                  }
                  if (valid16) {
                    if (data.key !== undefined) {
                      const _errs71 = errors;
                      if (typeof data.key !== 'string') {
                        const err47 = {
                          instancePath: instancePath + '/key',
                          schemaPath: '#/oneOf/6/properties/key/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        };
                        if (vErrors === null) {
                          vErrors = [err47];
                        } else {
                          vErrors.push(err47);
                        }
                        errors++;
                      }
                      var valid16 = _errs71 === errors;
                    } else {
                      var valid16 = true;
                    }
                    if (valid16) {
                      if (data.value !== undefined) {
                        let data25 = data.value;
                        const _errs73 = errors;
                        const _errs74 = errors;
                        let valid17 = false;
                        let passing5 = null;
                        const _errs75 = errors;
                        const _errs77 = errors;
                        let valid19 = false;
                        let passing6 = null;
                        const _errs78 = errors;
                        if (errors === _errs78) {
                          if (data25 && typeof data25 == 'object' && !Array.isArray(data25)) {
                            let missing10;
                            if (data25.delta === undefined && (missing10 = 'delta')) {
                              const err48 = {
                                instancePath: instancePath + '/value',
                                schemaPath: 'rich-text.json/oneOf/0/required',
                                keyword: 'required',
                                params: { missingProperty: missing10 },
                                message: "must have required property '" + missing10 + "'",
                              };
                              if (vErrors === null) {
                                vErrors = [err48];
                              } else {
                                vErrors.push(err48);
                              }
                              errors++;
                            } else {
                              if (data25.delta !== undefined) {
                                let data26 = data25.delta;
                                const _errs80 = errors;
                                if (errors === _errs80) {
                                  if (
                                    data26 &&
                                    typeof data26 == 'object' &&
                                    !Array.isArray(data26)
                                  ) {
                                    let missing11;
                                    if (data26.ops === undefined && (missing11 = 'ops')) {
                                      const err49 = {
                                        instancePath: instancePath + '/value/delta',
                                        schemaPath:
                                          'rich-text.json/oneOf/0/properties/delta/required',
                                        keyword: 'required',
                                        params: { missingProperty: missing11 },
                                        message: "must have required property '" + missing11 + "'",
                                      };
                                      if (vErrors === null) {
                                        vErrors = [err49];
                                      } else {
                                        vErrors.push(err49);
                                      }
                                      errors++;
                                    } else {
                                      if (data26.ops !== undefined) {
                                        let data27 = data26.ops;
                                        const _errs82 = errors;
                                        if (errors === _errs82) {
                                          if (Array.isArray(data27)) {
                                            var valid22 = true;
                                            const len1 = data27.length;
                                            for (let i1 = 0; i1 < len1; i1++) {
                                              let data28 = data27[i1];
                                              const _errs84 = errors;
                                              if (errors === _errs84) {
                                                if (
                                                  data28 &&
                                                  typeof data28 == 'object' &&
                                                  !Array.isArray(data28)
                                                ) {
                                                  let missing12;
                                                  if (
                                                    data28.insert === undefined &&
                                                    (missing12 = 'insert')
                                                  ) {
                                                    const err50 = {
                                                      instancePath:
                                                        instancePath + '/value/delta/ops/' + i1,
                                                      schemaPath:
                                                        'rich-text.json/oneOf/0/properties/delta/properties/ops/items/required',
                                                      keyword: 'required',
                                                      params: { missingProperty: missing12 },
                                                      message:
                                                        "must have required property '" +
                                                        missing12 +
                                                        "'",
                                                    };
                                                    if (vErrors === null) {
                                                      vErrors = [err50];
                                                    } else {
                                                      vErrors.push(err50);
                                                    }
                                                    errors++;
                                                  } else {
                                                    if (data28.insert !== undefined) {
                                                      let data29 = data28.insert;
                                                      const _errs86 = errors;
                                                      const _errs87 = errors;
                                                      let valid24 = false;
                                                      let passing7 = null;
                                                      const _errs88 = errors;
                                                      if (typeof data29 !== 'string') {
                                                        const err51 = {
                                                          instancePath:
                                                            instancePath +
                                                            '/value/delta/ops/' +
                                                            i1 +
                                                            '/insert',
                                                          schemaPath:
                                                            'rich-text.json/oneOf/0/properties/delta/properties/ops/items/properties/insert/oneOf/0/type',
                                                          keyword: 'type',
                                                          params: { type: 'string' },
                                                          message: 'must be string',
                                                        };
                                                        if (vErrors === null) {
                                                          vErrors = [err51];
                                                        } else {
                                                          vErrors.push(err51);
                                                        }
                                                        errors++;
                                                      }
                                                      var _valid7 = _errs88 === errors;
                                                      if (_valid7) {
                                                        valid24 = true;
                                                        passing7 = 0;
                                                      }
                                                      const _errs90 = errors;
                                                      if (
                                                        !(
                                                          data29 &&
                                                          typeof data29 == 'object' &&
                                                          !Array.isArray(data29)
                                                        )
                                                      ) {
                                                        const err52 = {
                                                          instancePath:
                                                            instancePath +
                                                            '/value/delta/ops/' +
                                                            i1 +
                                                            '/insert',
                                                          schemaPath:
                                                            'rich-text.json/oneOf/0/properties/delta/properties/ops/items/properties/insert/oneOf/1/type',
                                                          keyword: 'type',
                                                          params: { type: 'object' },
                                                          message: 'must be object',
                                                        };
                                                        if (vErrors === null) {
                                                          vErrors = [err52];
                                                        } else {
                                                          vErrors.push(err52);
                                                        }
                                                        errors++;
                                                      }
                                                      var _valid7 = _errs90 === errors;
                                                      if (_valid7 && valid24) {
                                                        valid24 = false;
                                                        passing7 = [passing7, 1];
                                                      } else {
                                                        if (_valid7) {
                                                          valid24 = true;
                                                          passing7 = 1;
                                                        }
                                                      }
                                                      if (!valid24) {
                                                        const err53 = {
                                                          instancePath:
                                                            instancePath +
                                                            '/value/delta/ops/' +
                                                            i1 +
                                                            '/insert',
                                                          schemaPath:
                                                            'rich-text.json/oneOf/0/properties/delta/properties/ops/items/properties/insert/oneOf',
                                                          keyword: 'oneOf',
                                                          params: { passingSchemas: passing7 },
                                                          message:
                                                            'must match exactly one schema in oneOf',
                                                        };
                                                        if (vErrors === null) {
                                                          vErrors = [err53];
                                                        } else {
                                                          vErrors.push(err53);
                                                        }
                                                        errors++;
                                                      } else {
                                                        errors = _errs87;
                                                        if (vErrors !== null) {
                                                          if (_errs87) {
                                                            vErrors.length = _errs87;
                                                          } else {
                                                            vErrors = null;
                                                          }
                                                        }
                                                      }
                                                      var valid23 = _errs86 === errors;
                                                    } else {
                                                      var valid23 = true;
                                                    }
                                                    if (valid23) {
                                                      if (data28.attributes !== undefined) {
                                                        let data30 = data28.attributes;
                                                        const _errs92 = errors;
                                                        if (
                                                          !(
                                                            data30 &&
                                                            typeof data30 == 'object' &&
                                                            !Array.isArray(data30)
                                                          )
                                                        ) {
                                                          const err54 = {
                                                            instancePath:
                                                              instancePath +
                                                              '/value/delta/ops/' +
                                                              i1 +
                                                              '/attributes',
                                                            schemaPath:
                                                              'rich-text.json/oneOf/0/properties/delta/properties/ops/items/properties/attributes/type',
                                                            keyword: 'type',
                                                            params: { type: 'object' },
                                                            message: 'must be object',
                                                          };
                                                          if (vErrors === null) {
                                                            vErrors = [err54];
                                                          } else {
                                                            vErrors.push(err54);
                                                          }
                                                          errors++;
                                                        }
                                                        var valid23 = _errs92 === errors;
                                                      } else {
                                                        var valid23 = true;
                                                      }
                                                    }
                                                  }
                                                } else {
                                                  const err55 = {
                                                    instancePath:
                                                      instancePath + '/value/delta/ops/' + i1,
                                                    schemaPath:
                                                      'rich-text.json/oneOf/0/properties/delta/properties/ops/items/type',
                                                    keyword: 'type',
                                                    params: { type: 'object' },
                                                    message: 'must be object',
                                                  };
                                                  if (vErrors === null) {
                                                    vErrors = [err55];
                                                  } else {
                                                    vErrors.push(err55);
                                                  }
                                                  errors++;
                                                }
                                              }
                                              var valid22 = _errs84 === errors;
                                              if (!valid22) {
                                                break;
                                              }
                                            }
                                          } else {
                                            const err56 = {
                                              instancePath: instancePath + '/value/delta/ops',
                                              schemaPath:
                                                'rich-text.json/oneOf/0/properties/delta/properties/ops/type',
                                              keyword: 'type',
                                              params: { type: 'array' },
                                              message: 'must be array',
                                            };
                                            if (vErrors === null) {
                                              vErrors = [err56];
                                            } else {
                                              vErrors.push(err56);
                                            }
                                            errors++;
                                          }
                                        }
                                      }
                                    }
                                  } else {
                                    const err57 = {
                                      instancePath: instancePath + '/value/delta',
                                      schemaPath: 'rich-text.json/oneOf/0/properties/delta/type',
                                      keyword: 'type',
                                      params: { type: 'object' },
                                      message: 'must be object',
                                    };
                                    if (vErrors === null) {
                                      vErrors = [err57];
                                    } else {
                                      vErrors.push(err57);
                                    }
                                    errors++;
                                  }
                                }
                              }
                            }
                          } else {
                            const err58 = {
                              instancePath: instancePath + '/value',
                              schemaPath: 'rich-text.json/oneOf/0/type',
                              keyword: 'type',
                              params: { type: 'object' },
                              message: 'must be object',
                            };
                            if (vErrors === null) {
                              vErrors = [err58];
                            } else {
                              vErrors.push(err58);
                            }
                            errors++;
                          }
                        }
                        var _valid6 = _errs78 === errors;
                        if (_valid6) {
                          valid19 = true;
                          passing6 = 0;
                          var props2 = {};
                          props2.delta = true;
                        }
                        if (!valid19) {
                          const err59 = {
                            instancePath: instancePath + '/value',
                            schemaPath: 'rich-text.json/oneOf',
                            keyword: 'oneOf',
                            params: { passingSchemas: passing6 },
                            message: 'must match exactly one schema in oneOf',
                          };
                          if (vErrors === null) {
                            vErrors = [err59];
                          } else {
                            vErrors.push(err59);
                          }
                          errors++;
                        } else {
                          errors = _errs77;
                          if (vErrors !== null) {
                            if (_errs77) {
                              vErrors.length = _errs77;
                            } else {
                              vErrors = null;
                            }
                          }
                        }
                        var _valid5 = _errs75 === errors;
                        if (_valid5) {
                          valid17 = true;
                          passing5 = 0;
                        }
                        const _errs94 = errors;
                        if (data25 !== null) {
                          const err60 = {
                            instancePath: instancePath + '/value',
                            schemaPath: '#/oneOf/6/properties/value/oneOf/1/type',
                            keyword: 'type',
                            params: { type: 'null' },
                            message: 'must be null',
                          };
                          if (vErrors === null) {
                            vErrors = [err60];
                          } else {
                            vErrors.push(err60);
                          }
                          errors++;
                        }
                        var _valid5 = _errs94 === errors;
                        if (_valid5 && valid17) {
                          valid17 = false;
                          passing5 = [passing5, 1];
                        } else {
                          if (_valid5) {
                            valid17 = true;
                            passing5 = 1;
                          }
                        }
                        if (!valid17) {
                          const err61 = {
                            instancePath: instancePath + '/value',
                            schemaPath: '#/oneOf/6/properties/value/oneOf',
                            keyword: 'oneOf',
                            params: { passingSchemas: passing5 },
                            message: 'must match exactly one schema in oneOf',
                          };
                          if (vErrors === null) {
                            vErrors = [err61];
                          } else {
                            vErrors.push(err61);
                          }
                          errors++;
                        } else {
                          errors = _errs74;
                          if (vErrors !== null) {
                            if (_errs74) {
                              vErrors.length = _errs74;
                            } else {
                              vErrors = null;
                            }
                          }
                        }
                        var valid16 = _errs73 === errors;
                      } else {
                        var valid16 = true;
                      }
                    }
                  }
                }
              } else {
                const err62 = {
                  instancePath,
                  schemaPath: '#/oneOf/6/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                };
                if (vErrors === null) {
                  vErrors = [err62];
                } else {
                  vErrors.push(err62);
                }
                errors++;
              }
            }
            var _valid0 = _errs68 === errors;
            if (_valid0 && valid0) {
              valid0 = false;
              passing0 = [passing0, 6];
            } else {
              if (_valid0) {
                valid0 = true;
                passing0 = 6;
                if (props0 !== true) {
                  props0 = props0 || {};
                  props0.type = true;
                  props0.key = true;
                  props0.value = true;
                }
              }
              const _errs96 = errors;
              if (errors === _errs96) {
                if (data && typeof data == 'object' && !Array.isArray(data)) {
                  let missing13;
                  if (
                    (data.type === undefined && (missing13 = 'type')) ||
                    (data.key === undefined && (missing13 = 'key')) ||
                    (data.value === undefined && (missing13 = 'value'))
                  ) {
                    const err63 = {
                      instancePath,
                      schemaPath: '#/oneOf/7/required',
                      keyword: 'required',
                      params: { missingProperty: missing13 },
                      message: "must have required property '" + missing13 + "'",
                    };
                    if (vErrors === null) {
                      vErrors = [err63];
                    } else {
                      vErrors.push(err63);
                    }
                    errors++;
                  } else {
                    if (data.type !== undefined) {
                      const _errs98 = errors;
                      if ('OptionalString' !== data.type) {
                        const err64 = {
                          instancePath: instancePath + '/type',
                          schemaPath: '#/oneOf/7/properties/type/const',
                          keyword: 'const',
                          params: { allowedValue: 'OptionalString' },
                          message: 'must be equal to constant',
                        };
                        if (vErrors === null) {
                          vErrors = [err64];
                        } else {
                          vErrors.push(err64);
                        }
                        errors++;
                      }
                      var valid25 = _errs98 === errors;
                    } else {
                      var valid25 = true;
                    }
                    if (valid25) {
                      if (data.key !== undefined) {
                        const _errs99 = errors;
                        if (typeof data.key !== 'string') {
                          const err65 = {
                            instancePath: instancePath + '/key',
                            schemaPath: '#/oneOf/7/properties/key/type',
                            keyword: 'type',
                            params: { type: 'string' },
                            message: 'must be string',
                          };
                          if (vErrors === null) {
                            vErrors = [err65];
                          } else {
                            vErrors.push(err65);
                          }
                          errors++;
                        }
                        var valid25 = _errs99 === errors;
                      } else {
                        var valid25 = true;
                      }
                      if (valid25) {
                        if (data.value !== undefined) {
                          let data33 = data.value;
                          const _errs101 = errors;
                          const _errs102 = errors;
                          let valid26 = false;
                          let passing8 = null;
                          const _errs103 = errors;
                          if (typeof data33 !== 'string') {
                            const err66 = {
                              instancePath: instancePath + '/value',
                              schemaPath: '#/oneOf/7/properties/value/oneOf/0/type',
                              keyword: 'type',
                              params: { type: 'string' },
                              message: 'must be string',
                            };
                            if (vErrors === null) {
                              vErrors = [err66];
                            } else {
                              vErrors.push(err66);
                            }
                            errors++;
                          }
                          var _valid8 = _errs103 === errors;
                          if (_valid8) {
                            valid26 = true;
                            passing8 = 0;
                          }
                          const _errs105 = errors;
                          if (data33 !== null) {
                            const err67 = {
                              instancePath: instancePath + '/value',
                              schemaPath: '#/oneOf/7/properties/value/oneOf/1/type',
                              keyword: 'type',
                              params: { type: 'null' },
                              message: 'must be null',
                            };
                            if (vErrors === null) {
                              vErrors = [err67];
                            } else {
                              vErrors.push(err67);
                            }
                            errors++;
                          }
                          var _valid8 = _errs105 === errors;
                          if (_valid8 && valid26) {
                            valid26 = false;
                            passing8 = [passing8, 1];
                          } else {
                            if (_valid8) {
                              valid26 = true;
                              passing8 = 1;
                            }
                          }
                          if (!valid26) {
                            const err68 = {
                              instancePath: instancePath + '/value',
                              schemaPath: '#/oneOf/7/properties/value/oneOf',
                              keyword: 'oneOf',
                              params: { passingSchemas: passing8 },
                              message: 'must match exactly one schema in oneOf',
                            };
                            if (vErrors === null) {
                              vErrors = [err68];
                            } else {
                              vErrors.push(err68);
                            }
                            errors++;
                          } else {
                            errors = _errs102;
                            if (vErrors !== null) {
                              if (_errs102) {
                                vErrors.length = _errs102;
                              } else {
                                vErrors = null;
                              }
                            }
                          }
                          var valid25 = _errs101 === errors;
                        } else {
                          var valid25 = true;
                        }
                      }
                    }
                  }
                } else {
                  const err69 = {
                    instancePath,
                    schemaPath: '#/oneOf/7/type',
                    keyword: 'type',
                    params: { type: 'object' },
                    message: 'must be object',
                  };
                  if (vErrors === null) {
                    vErrors = [err69];
                  } else {
                    vErrors.push(err69);
                  }
                  errors++;
                }
              }
              var _valid0 = _errs96 === errors;
              if (_valid0 && valid0) {
                valid0 = false;
                passing0 = [passing0, 7];
              } else {
                if (_valid0) {
                  valid0 = true;
                  passing0 = 7;
                  if (props0 !== true) {
                    props0 = props0 || {};
                    props0.type = true;
                    props0.key = true;
                    props0.value = true;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (!valid0) {
    const err70 = {
      instancePath,
      schemaPath: '#/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err70];
    } else {
      vErrors.push(err70);
    }
    errors++;
    validate62.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate62.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate62.evaluated = { dynamicProps: true, dynamicItems: false };
function validate61(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-create-site/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate61.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.name === undefined && (missing0 = 'name')) ||
        (data.customFields === undefined && (missing0 = 'customFields'))
      ) {
        validate61.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.name !== undefined) {
          const _errs1 = errors;
          if (typeof data.name !== 'string') {
            validate61.errors = [
              {
                instancePath: instancePath + '/name',
                schemaPath: '#/properties/name/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              },
            ];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.domain !== undefined) {
            const _errs3 = errors;
            if (typeof data.domain !== 'string') {
              validate61.errors = [
                {
                  instancePath: instancePath + '/domain',
                  schemaPath: '#/properties/domain/type',
                  keyword: 'type',
                  params: { type: 'string' },
                  message: 'must be string',
                },
              ];
              return false;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.orgId !== undefined) {
              const _errs5 = errors;
              if (typeof data.orgId !== 'string') {
                validate61.errors = [
                  {
                    instancePath: instancePath + '/orgId',
                    schemaPath: '#/properties/orgId/type',
                    keyword: 'type',
                    params: { type: 'string' },
                    message: 'must be string',
                  },
                ];
                return false;
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.customFields !== undefined) {
                let data3 = data.customFields;
                const _errs7 = errors;
                if (errors === _errs7) {
                  if (Array.isArray(data3)) {
                    var valid1 = true;
                    const len0 = data3.length;
                    for (let i0 = 0; i0 < len0; i0++) {
                      const _errs9 = errors;
                      if (
                        !validate62(data3[i0], {
                          instancePath: instancePath + '/customFields/' + i0,
                          parentData: data3,
                          parentDataProperty: i0,
                          rootData,
                          dynamicAnchors,
                        })
                      ) {
                        vErrors =
                          vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
                        errors = vErrors.length;
                      }
                      var valid1 = _errs9 === errors;
                      if (!valid1) {
                        break;
                      }
                    }
                  } else {
                    validate61.errors = [
                      {
                        instancePath: instancePath + '/customFields',
                        schemaPath: '#/properties/customFields/type',
                        keyword: 'type',
                        params: { type: 'array' },
                        message: 'must be array',
                      },
                    ];
                    return false;
                  }
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
            }
          }
        }
      }
    } else {
      validate61.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate61.errors = vErrors;
  return errors === 0;
}
validate61.evaluated = {
  props: { name: true, domain: true, orgId: true, customFields: true },
  dynamicProps: false,
  dynamicItems: false,
};
const schema72 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-create-site/context.json',
  title: 'BeforeCreateSiteContext',
  description: 'The context of the request.',
  allOf: [
    { $ref: '../../request-context/principal.json' },
    { $ref: '../../request-context/site.json' },
  ],
};
function validate65(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-create-site/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate65.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  if (
    !validate31(data, { instancePath, parentData, parentDataProperty, rootData, dynamicAnchors })
  ) {
    vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs1 = errors;
    const _errs2 = errors;
    if (errors === _errs2) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        if (data.site !== undefined) {
          let data0 = data.site;
          const _errs4 = errors;
          if (errors === _errs4) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing0;
              if (data0.id === undefined && (missing0 = 'id')) {
                validate65.errors = [
                  {
                    instancePath: instancePath + '/site',
                    schemaPath: '../../request-context/site.json/properties/site/required',
                    keyword: 'required',
                    params: { missingProperty: missing0 },
                    message: "must have required property '" + missing0 + "'",
                  },
                ];
                return false;
              } else {
                if (data0.id !== undefined) {
                  if (typeof data0.id !== 'string') {
                    validate65.errors = [
                      {
                        instancePath: instancePath + '/site/id',
                        schemaPath:
                          '../../request-context/site.json/properties/site/properties/id/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate65.errors = [
                {
                  instancePath: instancePath + '/site',
                  schemaPath: '../../request-context/site.json/properties/site/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
        }
      } else {
        validate65.errors = [
          {
            instancePath,
            schemaPath: '../../request-context/site.json/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object',
          },
        ];
        return false;
      }
    }
    var valid0 = _errs1 === errors;
  }
  validate65.errors = vErrors;
  return errors === 0;
}
validate65.evaluated = {
  props: { site: true, principal: true },
  dynamicProps: false,
  dynamicItems: false,
};
function validate60(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-create-site/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate60.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
        validate60.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate61(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.context !== undefined) {
            const _errs2 = errors;
            if (
              !validate65(data.context, {
                instancePath: instancePath + '/context',
                parentData: data,
                parentDataProperty: 'context',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate60.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate60.errors = vErrors;
  return errors === 0;
}
validate60.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateBeforeCreateSiteResult = validate68;
const schema74 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-create-site/result.json',
  title: 'BeforeCreateSiteResult',
  oneOf: [
    {
      type: 'object',
      properties: {
        value: { $ref: './value.json' },
        stop: {
          description:
            'If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.',
          type: ['boolean', 'null'],
        },
      },
      required: ['value'],
    },
    { $ref: '../../hook-reject-result/hook-reject-result.json' },
  ],
};
function validate68(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-create-site/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate68.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.value === undefined && (missing0 = 'value')) {
        const err0 = {
          instancePath,
          schemaPath: '#/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.value !== undefined) {
          const _errs3 = errors;
          if (
            !validate61(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
            errors = vErrors.length;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.stop !== undefined) {
            let data1 = data.stop;
            const _errs4 = errors;
            if (typeof data1 !== 'boolean' && data1 !== null) {
              const err1 = {
                instancePath: instancePath + '/stop',
                schemaPath: '#/oneOf/0/properties/stop/type',
                keyword: 'type',
                params: { type: schema74.oneOf[0].properties.stop.type },
                message: 'must be boolean,null',
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: '#/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
    var props0 = {};
    props0.value = true;
    props0.stop = true;
  }
  const _errs6 = errors;
  const _errs7 = errors;
  if (errors === _errs7) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (data.reject === undefined && (missing1 = 'reject')) {
        const err3 = {
          instancePath,
          schemaPath: '../../hook-reject-result/hook-reject-result.json/required',
          keyword: 'required',
          params: { missingProperty: missing1 },
          message: "must have required property '" + missing1 + "'",
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      } else {
        if (data.reject !== undefined) {
          if (typeof data.reject !== 'string') {
            const err4 = {
              instancePath: instancePath + '/reject',
              schemaPath: '../../hook-reject-result/hook-reject-result.json/properties/reject/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
        }
      }
    } else {
      const err5 = {
        instancePath,
        schemaPath: '../../hook-reject-result/hook-reject-result.json/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
  }
  var _valid0 = _errs6 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.reject = true;
      }
    }
  }
  if (!valid0) {
    const err6 = {
      instancePath,
      schemaPath: '#/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }
    errors++;
    validate68.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate68.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate68.evaluated = { dynamicProps: true, dynamicItems: false };
export const validateBeforeCreateUserInput = validate70;
const schema76 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-create-user/input.json',
  title: 'BeforeCreateUserInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
const schema77 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-create-user/value.json',
  title: 'BeforeCreateUserValue',
  type: 'object',
  properties: {
    email: { type: 'string' },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    orgId: {
      type: 'string',
      description:
        'The ID of the org that the user will be under. When not set, a new org is created and the user is set as the primary user in that org.',
    },
    status: { type: 'string', enum: ['Pending', 'Active', 'Deactivated'] },
  },
  required: ['email', 'firstName', 'lastName', 'status'],
};
const schema78 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-create-user/context.json',
  title: 'BeforeCreateUserContext',
  description: 'The context of the request.',
  allOf: [
    { $ref: '../../request-context/principal.json' },
    { $ref: '../../request-context/site.json' },
  ],
};
function validate71(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-create-user/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate71.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  if (
    !validate31(data, { instancePath, parentData, parentDataProperty, rootData, dynamicAnchors })
  ) {
    vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs1 = errors;
    const _errs2 = errors;
    if (errors === _errs2) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        if (data.site !== undefined) {
          let data0 = data.site;
          const _errs4 = errors;
          if (errors === _errs4) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing0;
              if (data0.id === undefined && (missing0 = 'id')) {
                validate71.errors = [
                  {
                    instancePath: instancePath + '/site',
                    schemaPath: '../../request-context/site.json/properties/site/required',
                    keyword: 'required',
                    params: { missingProperty: missing0 },
                    message: "must have required property '" + missing0 + "'",
                  },
                ];
                return false;
              } else {
                if (data0.id !== undefined) {
                  if (typeof data0.id !== 'string') {
                    validate71.errors = [
                      {
                        instancePath: instancePath + '/site/id',
                        schemaPath:
                          '../../request-context/site.json/properties/site/properties/id/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate71.errors = [
                {
                  instancePath: instancePath + '/site',
                  schemaPath: '../../request-context/site.json/properties/site/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
        }
      } else {
        validate71.errors = [
          {
            instancePath,
            schemaPath: '../../request-context/site.json/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object',
          },
        ];
        return false;
      }
    }
    var valid0 = _errs1 === errors;
  }
  validate71.errors = vErrors;
  return errors === 0;
}
validate71.evaluated = {
  props: { site: true, principal: true },
  dynamicProps: false,
  dynamicItems: false,
};
function validate70(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-create-user/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate70.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
        validate70.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          let data0 = data.value;
          const _errs1 = errors;
          const _errs2 = errors;
          if (errors === _errs2) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1;
              if (
                (data0.email === undefined && (missing1 = 'email')) ||
                (data0.firstName === undefined && (missing1 = 'firstName')) ||
                (data0.lastName === undefined && (missing1 = 'lastName')) ||
                (data0.status === undefined && (missing1 = 'status'))
              ) {
                validate70.errors = [
                  {
                    instancePath: instancePath + '/value',
                    schemaPath: './value.json/required',
                    keyword: 'required',
                    params: { missingProperty: missing1 },
                    message: "must have required property '" + missing1 + "'",
                  },
                ];
                return false;
              } else {
                if (data0.email !== undefined) {
                  const _errs4 = errors;
                  if (typeof data0.email !== 'string') {
                    validate70.errors = [
                      {
                        instancePath: instancePath + '/value/email',
                        schemaPath: './value.json/properties/email/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                  var valid2 = _errs4 === errors;
                } else {
                  var valid2 = true;
                }
                if (valid2) {
                  if (data0.firstName !== undefined) {
                    const _errs6 = errors;
                    if (typeof data0.firstName !== 'string') {
                      validate70.errors = [
                        {
                          instancePath: instancePath + '/value/firstName',
                          schemaPath: './value.json/properties/firstName/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                    var valid2 = _errs6 === errors;
                  } else {
                    var valid2 = true;
                  }
                  if (valid2) {
                    if (data0.lastName !== undefined) {
                      const _errs8 = errors;
                      if (typeof data0.lastName !== 'string') {
                        validate70.errors = [
                          {
                            instancePath: instancePath + '/value/lastName',
                            schemaPath: './value.json/properties/lastName/type',
                            keyword: 'type',
                            params: { type: 'string' },
                            message: 'must be string',
                          },
                        ];
                        return false;
                      }
                      var valid2 = _errs8 === errors;
                    } else {
                      var valid2 = true;
                    }
                    if (valid2) {
                      if (data0.orgId !== undefined) {
                        const _errs10 = errors;
                        if (typeof data0.orgId !== 'string') {
                          validate70.errors = [
                            {
                              instancePath: instancePath + '/value/orgId',
                              schemaPath: './value.json/properties/orgId/type',
                              keyword: 'type',
                              params: { type: 'string' },
                              message: 'must be string',
                            },
                          ];
                          return false;
                        }
                        var valid2 = _errs10 === errors;
                      } else {
                        var valid2 = true;
                      }
                      if (valid2) {
                        if (data0.status !== undefined) {
                          let data5 = data0.status;
                          const _errs12 = errors;
                          if (typeof data5 !== 'string') {
                            validate70.errors = [
                              {
                                instancePath: instancePath + '/value/status',
                                schemaPath: './value.json/properties/status/type',
                                keyword: 'type',
                                params: { type: 'string' },
                                message: 'must be string',
                              },
                            ];
                            return false;
                          }
                          if (
                            !(data5 === 'Pending' || data5 === 'Active' || data5 === 'Deactivated')
                          ) {
                            validate70.errors = [
                              {
                                instancePath: instancePath + '/value/status',
                                schemaPath: './value.json/properties/status/enum',
                                keyword: 'enum',
                                params: { allowedValues: schema77.properties.status.enum },
                                message: 'must be equal to one of the allowed values',
                              },
                            ];
                            return false;
                          }
                          var valid2 = _errs12 === errors;
                        } else {
                          var valid2 = true;
                        }
                      }
                    }
                  }
                }
              }
            } else {
              validate70.errors = [
                {
                  instancePath: instancePath + '/value',
                  schemaPath: './value.json/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.context !== undefined) {
            const _errs14 = errors;
            if (
              !validate71(data.context, {
                instancePath: instancePath + '/context',
                parentData: data,
                parentDataProperty: 'context',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs14 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate70.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate70.errors = vErrors;
  return errors === 0;
}
validate70.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateBeforeCreateUserResult = validate74;
const schema80 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-create-user/result.json',
  title: 'BeforeCreateUserResult',
  oneOf: [
    {
      type: 'object',
      properties: {
        value: { $ref: './value.json' },
        stop: {
          description:
            'If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.',
          type: ['boolean', 'null'],
        },
      },
      required: ['value'],
    },
    { $ref: '../../hook-reject-result/hook-reject-result.json' },
  ],
};
function validate74(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-create-user/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate74.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.value === undefined && (missing0 = 'value')) {
        const err0 = {
          instancePath,
          schemaPath: '#/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.value !== undefined) {
          let data0 = data.value;
          const _errs3 = errors;
          const _errs4 = errors;
          if (errors === _errs4) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1;
              if (
                (data0.email === undefined && (missing1 = 'email')) ||
                (data0.firstName === undefined && (missing1 = 'firstName')) ||
                (data0.lastName === undefined && (missing1 = 'lastName')) ||
                (data0.status === undefined && (missing1 = 'status'))
              ) {
                const err1 = {
                  instancePath: instancePath + '/value',
                  schemaPath: './value.json/required',
                  keyword: 'required',
                  params: { missingProperty: missing1 },
                  message: "must have required property '" + missing1 + "'",
                };
                if (vErrors === null) {
                  vErrors = [err1];
                } else {
                  vErrors.push(err1);
                }
                errors++;
              } else {
                if (data0.email !== undefined) {
                  const _errs6 = errors;
                  if (typeof data0.email !== 'string') {
                    const err2 = {
                      instancePath: instancePath + '/value/email',
                      schemaPath: './value.json/properties/email/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    };
                    if (vErrors === null) {
                      vErrors = [err2];
                    } else {
                      vErrors.push(err2);
                    }
                    errors++;
                  }
                  var valid3 = _errs6 === errors;
                } else {
                  var valid3 = true;
                }
                if (valid3) {
                  if (data0.firstName !== undefined) {
                    const _errs8 = errors;
                    if (typeof data0.firstName !== 'string') {
                      const err3 = {
                        instancePath: instancePath + '/value/firstName',
                        schemaPath: './value.json/properties/firstName/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      };
                      if (vErrors === null) {
                        vErrors = [err3];
                      } else {
                        vErrors.push(err3);
                      }
                      errors++;
                    }
                    var valid3 = _errs8 === errors;
                  } else {
                    var valid3 = true;
                  }
                  if (valid3) {
                    if (data0.lastName !== undefined) {
                      const _errs10 = errors;
                      if (typeof data0.lastName !== 'string') {
                        const err4 = {
                          instancePath: instancePath + '/value/lastName',
                          schemaPath: './value.json/properties/lastName/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        };
                        if (vErrors === null) {
                          vErrors = [err4];
                        } else {
                          vErrors.push(err4);
                        }
                        errors++;
                      }
                      var valid3 = _errs10 === errors;
                    } else {
                      var valid3 = true;
                    }
                    if (valid3) {
                      if (data0.orgId !== undefined) {
                        const _errs12 = errors;
                        if (typeof data0.orgId !== 'string') {
                          const err5 = {
                            instancePath: instancePath + '/value/orgId',
                            schemaPath: './value.json/properties/orgId/type',
                            keyword: 'type',
                            params: { type: 'string' },
                            message: 'must be string',
                          };
                          if (vErrors === null) {
                            vErrors = [err5];
                          } else {
                            vErrors.push(err5);
                          }
                          errors++;
                        }
                        var valid3 = _errs12 === errors;
                      } else {
                        var valid3 = true;
                      }
                      if (valid3) {
                        if (data0.status !== undefined) {
                          let data5 = data0.status;
                          const _errs14 = errors;
                          if (typeof data5 !== 'string') {
                            const err6 = {
                              instancePath: instancePath + '/value/status',
                              schemaPath: './value.json/properties/status/type',
                              keyword: 'type',
                              params: { type: 'string' },
                              message: 'must be string',
                            };
                            if (vErrors === null) {
                              vErrors = [err6];
                            } else {
                              vErrors.push(err6);
                            }
                            errors++;
                          }
                          if (
                            !(data5 === 'Pending' || data5 === 'Active' || data5 === 'Deactivated')
                          ) {
                            const err7 = {
                              instancePath: instancePath + '/value/status',
                              schemaPath: './value.json/properties/status/enum',
                              keyword: 'enum',
                              params: { allowedValues: schema77.properties.status.enum },
                              message: 'must be equal to one of the allowed values',
                            };
                            if (vErrors === null) {
                              vErrors = [err7];
                            } else {
                              vErrors.push(err7);
                            }
                            errors++;
                          }
                          var valid3 = _errs14 === errors;
                        } else {
                          var valid3 = true;
                        }
                      }
                    }
                  }
                }
              }
            } else {
              const err8 = {
                instancePath: instancePath + '/value',
                schemaPath: './value.json/type',
                keyword: 'type',
                params: { type: 'object' },
                message: 'must be object',
              };
              if (vErrors === null) {
                vErrors = [err8];
              } else {
                vErrors.push(err8);
              }
              errors++;
            }
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.stop !== undefined) {
            let data6 = data.stop;
            const _errs16 = errors;
            if (typeof data6 !== 'boolean' && data6 !== null) {
              const err9 = {
                instancePath: instancePath + '/stop',
                schemaPath: '#/oneOf/0/properties/stop/type',
                keyword: 'type',
                params: { type: schema80.oneOf[0].properties.stop.type },
                message: 'must be boolean,null',
              };
              if (vErrors === null) {
                vErrors = [err9];
              } else {
                vErrors.push(err9);
              }
              errors++;
            }
            var valid1 = _errs16 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      const err10 = {
        instancePath,
        schemaPath: '#/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err10];
      } else {
        vErrors.push(err10);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
    var props0 = {};
    props0.value = true;
    props0.stop = true;
  }
  const _errs18 = errors;
  const _errs19 = errors;
  if (errors === _errs19) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing2;
      if (data.reject === undefined && (missing2 = 'reject')) {
        const err11 = {
          instancePath,
          schemaPath: '../../hook-reject-result/hook-reject-result.json/required',
          keyword: 'required',
          params: { missingProperty: missing2 },
          message: "must have required property '" + missing2 + "'",
        };
        if (vErrors === null) {
          vErrors = [err11];
        } else {
          vErrors.push(err11);
        }
        errors++;
      } else {
        if (data.reject !== undefined) {
          if (typeof data.reject !== 'string') {
            const err12 = {
              instancePath: instancePath + '/reject',
              schemaPath: '../../hook-reject-result/hook-reject-result.json/properties/reject/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            };
            if (vErrors === null) {
              vErrors = [err12];
            } else {
              vErrors.push(err12);
            }
            errors++;
          }
        }
      }
    } else {
      const err13 = {
        instancePath,
        schemaPath: '../../hook-reject-result/hook-reject-result.json/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err13];
      } else {
        vErrors.push(err13);
      }
      errors++;
    }
  }
  var _valid0 = _errs18 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.reject = true;
      }
    }
  }
  if (!valid0) {
    const err14 = {
      instancePath,
      schemaPath: '#/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err14];
    } else {
      vErrors.push(err14);
    }
    errors++;
    validate74.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate74.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate74.evaluated = { dynamicProps: true, dynamicItems: false };
export const validateBeforeEditSiteInput = validate75;
const schema83 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-edit-site/input.json',
  title: 'BeforeEditSiteInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
const schema84 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-edit-site/value.json',
  title: 'BeforeEditSiteValue',
  type: 'object',
  properties: {
    name: {
      description: 'The new name. If this field is not set, the name is not being edited.',
      type: 'object',
      properties: { value: { type: 'string' } },
      required: ['value'],
    },
    domain: {
      description: 'The new domain. If this field is not set, the domain is not being edited.',
      type: 'object',
      properties: { value: { type: 'string' } },
      required: ['value'],
    },
    orgId: {
      description:
        'The new ID of the org that will own the site. If this field is not set, the org is not being edited.',
      type: 'object',
      properties: { value: { type: 'string' } },
      required: ['value'],
    },
    customFields: {
      description:
        'The custom fields to edit. If this field is not set or is an empty array, no custom fields are being edited.',
      type: 'array',
      items: { $ref: '../../custom-field/custom-field.json' },
    },
  },
};
function validate76(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-edit-site/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate76.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      if (data.name !== undefined) {
        let data0 = data.name;
        const _errs1 = errors;
        if (errors === _errs1) {
          if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
            let missing0;
            if (data0.value === undefined && (missing0 = 'value')) {
              validate76.errors = [
                {
                  instancePath: instancePath + '/name',
                  schemaPath: '#/properties/name/required',
                  keyword: 'required',
                  params: { missingProperty: missing0 },
                  message: "must have required property '" + missing0 + "'",
                },
              ];
              return false;
            } else {
              if (data0.value !== undefined) {
                if (typeof data0.value !== 'string') {
                  validate76.errors = [
                    {
                      instancePath: instancePath + '/name/value',
                      schemaPath: '#/properties/name/properties/value/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    },
                  ];
                  return false;
                }
              }
            }
          } else {
            validate76.errors = [
              {
                instancePath: instancePath + '/name',
                schemaPath: '#/properties/name/type',
                keyword: 'type',
                params: { type: 'object' },
                message: 'must be object',
              },
            ];
            return false;
          }
        }
        var valid0 = _errs1 === errors;
      } else {
        var valid0 = true;
      }
      if (valid0) {
        if (data.domain !== undefined) {
          let data2 = data.domain;
          const _errs5 = errors;
          if (errors === _errs5) {
            if (data2 && typeof data2 == 'object' && !Array.isArray(data2)) {
              let missing1;
              if (data2.value === undefined && (missing1 = 'value')) {
                validate76.errors = [
                  {
                    instancePath: instancePath + '/domain',
                    schemaPath: '#/properties/domain/required',
                    keyword: 'required',
                    params: { missingProperty: missing1 },
                    message: "must have required property '" + missing1 + "'",
                  },
                ];
                return false;
              } else {
                if (data2.value !== undefined) {
                  if (typeof data2.value !== 'string') {
                    validate76.errors = [
                      {
                        instancePath: instancePath + '/domain/value',
                        schemaPath: '#/properties/domain/properties/value/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate76.errors = [
                {
                  instancePath: instancePath + '/domain',
                  schemaPath: '#/properties/domain/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
          var valid0 = _errs5 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.orgId !== undefined) {
            let data4 = data.orgId;
            const _errs9 = errors;
            if (errors === _errs9) {
              if (data4 && typeof data4 == 'object' && !Array.isArray(data4)) {
                let missing2;
                if (data4.value === undefined && (missing2 = 'value')) {
                  validate76.errors = [
                    {
                      instancePath: instancePath + '/orgId',
                      schemaPath: '#/properties/orgId/required',
                      keyword: 'required',
                      params: { missingProperty: missing2 },
                      message: "must have required property '" + missing2 + "'",
                    },
                  ];
                  return false;
                } else {
                  if (data4.value !== undefined) {
                    if (typeof data4.value !== 'string') {
                      validate76.errors = [
                        {
                          instancePath: instancePath + '/orgId/value',
                          schemaPath: '#/properties/orgId/properties/value/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                  }
                }
              } else {
                validate76.errors = [
                  {
                    instancePath: instancePath + '/orgId',
                    schemaPath: '#/properties/orgId/type',
                    keyword: 'type',
                    params: { type: 'object' },
                    message: 'must be object',
                  },
                ];
                return false;
              }
            }
            var valid0 = _errs9 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.customFields !== undefined) {
              let data6 = data.customFields;
              const _errs13 = errors;
              if (errors === _errs13) {
                if (Array.isArray(data6)) {
                  var valid4 = true;
                  const len0 = data6.length;
                  for (let i0 = 0; i0 < len0; i0++) {
                    const _errs15 = errors;
                    if (
                      !validate62(data6[i0], {
                        instancePath: instancePath + '/customFields/' + i0,
                        parentData: data6,
                        parentDataProperty: i0,
                        rootData,
                        dynamicAnchors,
                      })
                    ) {
                      vErrors =
                        vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
                      errors = vErrors.length;
                    }
                    var valid4 = _errs15 === errors;
                    if (!valid4) {
                      break;
                    }
                  }
                } else {
                  validate76.errors = [
                    {
                      instancePath: instancePath + '/customFields',
                      schemaPath: '#/properties/customFields/type',
                      keyword: 'type',
                      params: { type: 'array' },
                      message: 'must be array',
                    },
                  ];
                  return false;
                }
              }
              var valid0 = _errs13 === errors;
            } else {
              var valid0 = true;
            }
          }
        }
      }
    } else {
      validate76.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate76.errors = vErrors;
  return errors === 0;
}
validate76.evaluated = {
  props: { name: true, domain: true, orgId: true, customFields: true },
  dynamicProps: false,
  dynamicItems: false,
};
const schema85 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-edit-site/context.json',
  title: 'BeforeEditSiteContext',
  description: 'The context of the request.',
  allOf: [
    { $ref: '../../request-context/principal.json' },
    { $ref: '../../request-context/site.json' },
  ],
};
function validate79(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-edit-site/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate79.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  if (
    !validate31(data, { instancePath, parentData, parentDataProperty, rootData, dynamicAnchors })
  ) {
    vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs1 = errors;
    const _errs2 = errors;
    if (errors === _errs2) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        if (data.site !== undefined) {
          let data0 = data.site;
          const _errs4 = errors;
          if (errors === _errs4) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing0;
              if (data0.id === undefined && (missing0 = 'id')) {
                validate79.errors = [
                  {
                    instancePath: instancePath + '/site',
                    schemaPath: '../../request-context/site.json/properties/site/required',
                    keyword: 'required',
                    params: { missingProperty: missing0 },
                    message: "must have required property '" + missing0 + "'",
                  },
                ];
                return false;
              } else {
                if (data0.id !== undefined) {
                  if (typeof data0.id !== 'string') {
                    validate79.errors = [
                      {
                        instancePath: instancePath + '/site/id',
                        schemaPath:
                          '../../request-context/site.json/properties/site/properties/id/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate79.errors = [
                {
                  instancePath: instancePath + '/site',
                  schemaPath: '../../request-context/site.json/properties/site/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
        }
      } else {
        validate79.errors = [
          {
            instancePath,
            schemaPath: '../../request-context/site.json/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object',
          },
        ];
        return false;
      }
    }
    var valid0 = _errs1 === errors;
  }
  validate79.errors = vErrors;
  return errors === 0;
}
validate79.evaluated = {
  props: { site: true, principal: true },
  dynamicProps: false,
  dynamicItems: false,
};
function validate75(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-edit-site/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate75.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
        validate75.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate76(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate76.errors : vErrors.concat(validate76.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.context !== undefined) {
            const _errs2 = errors;
            if (
              !validate79(data.context, {
                instancePath: instancePath + '/context',
                parentData: data,
                parentDataProperty: 'context',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors = vErrors === null ? validate79.errors : vErrors.concat(validate79.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate75.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate75.errors = vErrors;
  return errors === 0;
}
validate75.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateBeforeEditSiteResult = validate82;
const schema87 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-edit-site/result.json',
  title: 'BeforeEditSiteResult',
  oneOf: [
    {
      type: 'object',
      properties: {
        value: { $ref: './value.json' },
        stop: {
          description:
            'If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.',
          type: ['boolean', 'null'],
        },
      },
      required: ['value'],
    },
    { $ref: '../../hook-reject-result/hook-reject-result.json' },
  ],
};
function validate82(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-edit-site/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate82.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.value === undefined && (missing0 = 'value')) {
        const err0 = {
          instancePath,
          schemaPath: '#/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.value !== undefined) {
          const _errs3 = errors;
          if (
            !validate76(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate76.errors : vErrors.concat(validate76.errors);
            errors = vErrors.length;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.stop !== undefined) {
            let data1 = data.stop;
            const _errs4 = errors;
            if (typeof data1 !== 'boolean' && data1 !== null) {
              const err1 = {
                instancePath: instancePath + '/stop',
                schemaPath: '#/oneOf/0/properties/stop/type',
                keyword: 'type',
                params: { type: schema87.oneOf[0].properties.stop.type },
                message: 'must be boolean,null',
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: '#/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
    var props0 = {};
    props0.value = true;
    props0.stop = true;
  }
  const _errs6 = errors;
  const _errs7 = errors;
  if (errors === _errs7) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (data.reject === undefined && (missing1 = 'reject')) {
        const err3 = {
          instancePath,
          schemaPath: '../../hook-reject-result/hook-reject-result.json/required',
          keyword: 'required',
          params: { missingProperty: missing1 },
          message: "must have required property '" + missing1 + "'",
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      } else {
        if (data.reject !== undefined) {
          if (typeof data.reject !== 'string') {
            const err4 = {
              instancePath: instancePath + '/reject',
              schemaPath: '../../hook-reject-result/hook-reject-result.json/properties/reject/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
        }
      }
    } else {
      const err5 = {
        instancePath,
        schemaPath: '../../hook-reject-result/hook-reject-result.json/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
  }
  var _valid0 = _errs6 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.reject = true;
      }
    }
  }
  if (!valid0) {
    const err6 = {
      instancePath,
      schemaPath: '#/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }
    errors++;
    validate82.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate82.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate82.evaluated = { dynamicProps: true, dynamicItems: false };
export const validateBeforeSubmitFormInput = validate84;
const schema89 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-submit-form/input.json',
  title: 'BeforeSubmitFormInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
const schema90 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-submit-form/value.json',
  type: 'object',
  title: 'BeforeSubmitFormValue',
  properties: {
    formData: {
      $ref: '../../context-data/context-data.json',
      description: 'The data that was submitted in the form.',
    },
    saveToDatabase: {
      type: 'boolean',
      description:
        'Whether the form submission should be saved to the database. If there are multiple extensions handling this hook, the value of the last hook is used.',
    },
  },
  required: ['formData', 'saveToDatabase'],
};
function validate85(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-submit-form/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate85.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.formData === undefined && (missing0 = 'formData')) ||
        (data.saveToDatabase === undefined && (missing0 = 'saveToDatabase'))
      ) {
        validate85.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.formData !== undefined) {
          const _errs1 = errors;
          if (
            !validate20(data.formData, {
              instancePath: instancePath + '/formData',
              parentData: data,
              parentDataProperty: 'formData',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.saveToDatabase !== undefined) {
            const _errs2 = errors;
            if (typeof data.saveToDatabase !== 'boolean') {
              validate85.errors = [
                {
                  instancePath: instancePath + '/saveToDatabase',
                  schemaPath: '#/properties/saveToDatabase/type',
                  keyword: 'type',
                  params: { type: 'boolean' },
                  message: 'must be boolean',
                },
              ];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate85.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate85.errors = vErrors;
  return errors === 0;
}
validate85.evaluated = {
  props: { formData: true, saveToDatabase: true },
  dynamicProps: false,
  dynamicItems: false,
};
const schema91 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-submit-form/context.json',
  title: 'BeforeSubmitFormContext',
  description: 'The context of the request.',
  allOf: [
    { $ref: '../../request-context/principal.json' },
    { $ref: '../../request-context/site.json' },
    {
      type: 'object',
      properties: {
        formSubmissionSessionId: {
          description:
            'The randomly generated ID that identifies the form submission session. It can be used to connect submissions of different steps of the same form.',
          type: 'string',
        },
        stepId: {
          description: 'The ID of the step being submitted, if the form has steps.',
          type: 'string',
        },
        finalStep: {
          description:
            'Whether this is the final step of a multi-step form, or true if the form does not have steps.',
          type: 'boolean',
        },
        submitterIpAddress: {
          description: 'The IP address from which the submission was made.',
          type: 'string',
        },
        form: {
          description: 'The form being submitted.',
          type: 'object',
          properties: { id: { type: 'string' } },
          required: ['id'],
        },
        pageUrl: {
          description: 'The full URL of the page where the form is being shown.',
          type: 'string',
        },
      },
      required: ['formSubmissionSessionId', 'finalStep', 'form', 'pageUrl'],
    },
  ],
};
function validate88(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-submit-form/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate88.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  if (
    !validate31(data, { instancePath, parentData, parentDataProperty, rootData, dynamicAnchors })
  ) {
    vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs1 = errors;
    const _errs2 = errors;
    if (errors === _errs2) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        if (data.site !== undefined) {
          let data0 = data.site;
          const _errs4 = errors;
          if (errors === _errs4) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing0;
              if (data0.id === undefined && (missing0 = 'id')) {
                validate88.errors = [
                  {
                    instancePath: instancePath + '/site',
                    schemaPath: '../../request-context/site.json/properties/site/required',
                    keyword: 'required',
                    params: { missingProperty: missing0 },
                    message: "must have required property '" + missing0 + "'",
                  },
                ];
                return false;
              } else {
                if (data0.id !== undefined) {
                  if (typeof data0.id !== 'string') {
                    validate88.errors = [
                      {
                        instancePath: instancePath + '/site/id',
                        schemaPath:
                          '../../request-context/site.json/properties/site/properties/id/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate88.errors = [
                {
                  instancePath: instancePath + '/site',
                  schemaPath: '../../request-context/site.json/properties/site/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
        }
      } else {
        validate88.errors = [
          {
            instancePath,
            schemaPath: '../../request-context/site.json/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object',
          },
        ];
        return false;
      }
    }
    var valid0 = _errs1 === errors;
    if (valid0) {
      const _errs8 = errors;
      if (errors === _errs8) {
        if (data && typeof data == 'object' && !Array.isArray(data)) {
          let missing1;
          if (
            (data.formSubmissionSessionId === undefined &&
              (missing1 = 'formSubmissionSessionId')) ||
            (data.finalStep === undefined && (missing1 = 'finalStep')) ||
            (data.form === undefined && (missing1 = 'form')) ||
            (data.pageUrl === undefined && (missing1 = 'pageUrl'))
          ) {
            validate88.errors = [
              {
                instancePath,
                schemaPath: '#/allOf/2/required',
                keyword: 'required',
                params: { missingProperty: missing1 },
                message: "must have required property '" + missing1 + "'",
              },
            ];
            return false;
          } else {
            if (data.formSubmissionSessionId !== undefined) {
              const _errs10 = errors;
              if (typeof data.formSubmissionSessionId !== 'string') {
                validate88.errors = [
                  {
                    instancePath: instancePath + '/formSubmissionSessionId',
                    schemaPath: '#/allOf/2/properties/formSubmissionSessionId/type',
                    keyword: 'type',
                    params: { type: 'string' },
                    message: 'must be string',
                  },
                ];
                return false;
              }
              var valid4 = _errs10 === errors;
            } else {
              var valid4 = true;
            }
            if (valid4) {
              if (data.stepId !== undefined) {
                const _errs12 = errors;
                if (typeof data.stepId !== 'string') {
                  validate88.errors = [
                    {
                      instancePath: instancePath + '/stepId',
                      schemaPath: '#/allOf/2/properties/stepId/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    },
                  ];
                  return false;
                }
                var valid4 = _errs12 === errors;
              } else {
                var valid4 = true;
              }
              if (valid4) {
                if (data.finalStep !== undefined) {
                  const _errs14 = errors;
                  if (typeof data.finalStep !== 'boolean') {
                    validate88.errors = [
                      {
                        instancePath: instancePath + '/finalStep',
                        schemaPath: '#/allOf/2/properties/finalStep/type',
                        keyword: 'type',
                        params: { type: 'boolean' },
                        message: 'must be boolean',
                      },
                    ];
                    return false;
                  }
                  var valid4 = _errs14 === errors;
                } else {
                  var valid4 = true;
                }
                if (valid4) {
                  if (data.submitterIpAddress !== undefined) {
                    const _errs16 = errors;
                    if (typeof data.submitterIpAddress !== 'string') {
                      validate88.errors = [
                        {
                          instancePath: instancePath + '/submitterIpAddress',
                          schemaPath: '#/allOf/2/properties/submitterIpAddress/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                    var valid4 = _errs16 === errors;
                  } else {
                    var valid4 = true;
                  }
                  if (valid4) {
                    if (data.form !== undefined) {
                      let data6 = data.form;
                      const _errs18 = errors;
                      if (errors === _errs18) {
                        if (data6 && typeof data6 == 'object' && !Array.isArray(data6)) {
                          let missing2;
                          if (data6.id === undefined && (missing2 = 'id')) {
                            validate88.errors = [
                              {
                                instancePath: instancePath + '/form',
                                schemaPath: '#/allOf/2/properties/form/required',
                                keyword: 'required',
                                params: { missingProperty: missing2 },
                                message: "must have required property '" + missing2 + "'",
                              },
                            ];
                            return false;
                          } else {
                            if (data6.id !== undefined) {
                              if (typeof data6.id !== 'string') {
                                validate88.errors = [
                                  {
                                    instancePath: instancePath + '/form/id',
                                    schemaPath: '#/allOf/2/properties/form/properties/id/type',
                                    keyword: 'type',
                                    params: { type: 'string' },
                                    message: 'must be string',
                                  },
                                ];
                                return false;
                              }
                            }
                          }
                        } else {
                          validate88.errors = [
                            {
                              instancePath: instancePath + '/form',
                              schemaPath: '#/allOf/2/properties/form/type',
                              keyword: 'type',
                              params: { type: 'object' },
                              message: 'must be object',
                            },
                          ];
                          return false;
                        }
                      }
                      var valid4 = _errs18 === errors;
                    } else {
                      var valid4 = true;
                    }
                    if (valid4) {
                      if (data.pageUrl !== undefined) {
                        const _errs22 = errors;
                        if (typeof data.pageUrl !== 'string') {
                          validate88.errors = [
                            {
                              instancePath: instancePath + '/pageUrl',
                              schemaPath: '#/allOf/2/properties/pageUrl/type',
                              keyword: 'type',
                              params: { type: 'string' },
                              message: 'must be string',
                            },
                          ];
                          return false;
                        }
                        var valid4 = _errs22 === errors;
                      } else {
                        var valid4 = true;
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          validate88.errors = [
            {
              instancePath,
              schemaPath: '#/allOf/2/type',
              keyword: 'type',
              params: { type: 'object' },
              message: 'must be object',
            },
          ];
          return false;
        }
      }
      var valid0 = _errs8 === errors;
    }
  }
  validate88.errors = vErrors;
  return errors === 0;
}
validate88.evaluated = {
  props: {
    formSubmissionSessionId: true,
    stepId: true,
    finalStep: true,
    submitterIpAddress: true,
    form: true,
    pageUrl: true,
    site: true,
    principal: true,
  },
  dynamicProps: false,
  dynamicItems: false,
};
function validate84(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-submit-form/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate84.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
        validate84.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate85(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate85.errors : vErrors.concat(validate85.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.context !== undefined) {
            const _errs2 = errors;
            if (
              !validate88(data.context, {
                instancePath: instancePath + '/context',
                parentData: data,
                parentDataProperty: 'context',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors = vErrors === null ? validate88.errors : vErrors.concat(validate88.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate84.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate84.errors = vErrors;
  return errors === 0;
}
validate84.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateBeforeSubmitFormResult = validate91;
const schema93 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-submit-form/result.json',
  title: 'BeforeSubmitFormResult',
  oneOf: [
    {
      type: 'object',
      properties: {
        value: { $ref: './value.json' },
        stop: {
          description:
            'If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.',
          type: ['boolean', 'null'],
        },
      },
      required: ['value'],
    },
    { $ref: '../../hook-reject-result/hook-reject-result.json' },
  ],
};
function validate91(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-submit-form/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate91.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.value === undefined && (missing0 = 'value')) {
        const err0 = {
          instancePath,
          schemaPath: '#/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.value !== undefined) {
          const _errs3 = errors;
          if (
            !validate85(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate85.errors : vErrors.concat(validate85.errors);
            errors = vErrors.length;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.stop !== undefined) {
            let data1 = data.stop;
            const _errs4 = errors;
            if (typeof data1 !== 'boolean' && data1 !== null) {
              const err1 = {
                instancePath: instancePath + '/stop',
                schemaPath: '#/oneOf/0/properties/stop/type',
                keyword: 'type',
                params: { type: schema93.oneOf[0].properties.stop.type },
                message: 'must be boolean,null',
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: '#/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
    var props0 = {};
    props0.value = true;
    props0.stop = true;
  }
  const _errs6 = errors;
  const _errs7 = errors;
  if (errors === _errs7) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (data.reject === undefined && (missing1 = 'reject')) {
        const err3 = {
          instancePath,
          schemaPath: '../../hook-reject-result/hook-reject-result.json/required',
          keyword: 'required',
          params: { missingProperty: missing1 },
          message: "must have required property '" + missing1 + "'",
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      } else {
        if (data.reject !== undefined) {
          if (typeof data.reject !== 'string') {
            const err4 = {
              instancePath: instancePath + '/reject',
              schemaPath: '../../hook-reject-result/hook-reject-result.json/properties/reject/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
        }
      }
    } else {
      const err5 = {
        instancePath,
        schemaPath: '../../hook-reject-result/hook-reject-result.json/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
  }
  var _valid0 = _errs6 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.reject = true;
      }
    }
  }
  if (!valid0) {
    const err6 = {
      instancePath,
      schemaPath: '#/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }
    errors++;
    validate91.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate91.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate91.evaluated = { dynamicProps: true, dynamicItems: false };
export const validateBeforeSubmitFormWebhookInput = validate93;
const schema95 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-submit-form-webhook/input.json',
  title: 'BeforeSubmitFormWebhookInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
const schema96 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-submit-form-webhook/value.json',
  type: 'object',
  title: 'BeforeSubmitFormWebhookValue',
  properties: {
    payload: {
      type: 'object',
      properties: {
        formId: { type: 'string' },
        formSubmissionSessionId: { type: 'string' },
        formData: {
          description:
            'The submission data from all of the steps, or just from the form itself if there are no steps.',
          type: 'object',
          additionalProperties: true,
        },
        finalStep: {
          description:
            "Whether this submission came from the final step of the form. This is set to true if the form doesn't have any steps.",
          type: 'boolean',
        },
        submissionPageUrl: {
          description: 'The full URL of the page where the form was submitted.',
          type: ['string', 'null'],
        },
        createdAt: { description: 'The timestamp of the submission.', type: 'string' },
        submitterIpAddress: {
          description: 'The IP address from which the submission was made.',
          type: ['string', 'null'],
        },
        submitterUser: {
          type: ['object', 'null'],
          properties: {
            id: { type: 'string' },
            email: { type: 'string' },
            firstName: { type: 'string' },
            lastName: { type: 'string' },
          },
          required: ['id', 'email', 'firstName', 'lastName'],
        },
        latestSubmissionsByStep: {
          description:
            'The latest submissions for the same session by step. The idea behind “latest” is that users can submit a step and then go back and change their input, if the form allows it. This is an empty array if the form has no steps.',
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', description: 'The ID of the form submission.' },
              step: {
                type: 'object',
                properties: {
                  id: { description: 'The ID of the step.', type: 'string' },
                  name: { description: 'The name of the step.', type: 'string' },
                  position: {
                    description:
                      'The relative position of the step in the form, a string that can be be used to sort the steps lexicographically.',
                    type: 'string',
                  },
                },
                required: ['id', 'name', 'position'],
              },
              formData: {
                type: 'object',
                additionalProperties: true,
                description: 'The submission data from just the step.',
              },
              submitterIpAddress: {
                description: 'The IP address from which the submission was made.',
                type: ['string', 'null'],
              },
              createdAt: { type: 'string', description: 'The timestamp of the submission.' },
            },
            required: ['id', 'step', 'formData', 'submitterIpAddress', 'createdAt'],
          },
        },
      },
      additionalProperties: true,
      required: [
        'formId',
        'formSubmissionSessionId',
        'formData',
        'finalStep',
        'submissionPageUrl',
        'createdAt',
        'submitterIpAddress',
        'submitterUser',
        'latestSubmissionsByStep',
      ],
    },
  },
  required: ['payload'],
};
const schema97 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-submit-form-webhook/context.json',
  title: 'BeforeSubmitFormWebhookContext',
  description: 'The context of the form submission webhook action.',
  type: 'object',
  properties: {
    formSubmissionActionId: {
      description: 'The ID of the form submission action being executed.',
      type: 'string',
    },
  },
  required: ['formSubmissionActionId'],
};
function validate93(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-submit-form-webhook/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate93.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
        validate93.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          let data0 = data.value;
          const _errs1 = errors;
          const _errs2 = errors;
          if (errors === _errs2) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1;
              if (data0.payload === undefined && (missing1 = 'payload')) {
                validate93.errors = [
                  {
                    instancePath: instancePath + '/value',
                    schemaPath: './value.json/required',
                    keyword: 'required',
                    params: { missingProperty: missing1 },
                    message: "must have required property '" + missing1 + "'",
                  },
                ];
                return false;
              } else {
                if (data0.payload !== undefined) {
                  let data1 = data0.payload;
                  const _errs4 = errors;
                  if (errors === _errs4) {
                    if (data1 && typeof data1 == 'object' && !Array.isArray(data1)) {
                      let missing2;
                      if (
                        (data1.formId === undefined && (missing2 = 'formId')) ||
                        (data1.formSubmissionSessionId === undefined &&
                          (missing2 = 'formSubmissionSessionId')) ||
                        (data1.formData === undefined && (missing2 = 'formData')) ||
                        (data1.finalStep === undefined && (missing2 = 'finalStep')) ||
                        (data1.submissionPageUrl === undefined &&
                          (missing2 = 'submissionPageUrl')) ||
                        (data1.createdAt === undefined && (missing2 = 'createdAt')) ||
                        (data1.submitterIpAddress === undefined &&
                          (missing2 = 'submitterIpAddress')) ||
                        (data1.submitterUser === undefined && (missing2 = 'submitterUser')) ||
                        (data1.latestSubmissionsByStep === undefined &&
                          (missing2 = 'latestSubmissionsByStep'))
                      ) {
                        validate93.errors = [
                          {
                            instancePath: instancePath + '/value/payload',
                            schemaPath: './value.json/properties/payload/required',
                            keyword: 'required',
                            params: { missingProperty: missing2 },
                            message: "must have required property '" + missing2 + "'",
                          },
                        ];
                        return false;
                      } else {
                        if (data1.formId !== undefined) {
                          const _errs7 = errors;
                          if (typeof data1.formId !== 'string') {
                            validate93.errors = [
                              {
                                instancePath: instancePath + '/value/payload/formId',
                                schemaPath:
                                  './value.json/properties/payload/properties/formId/type',
                                keyword: 'type',
                                params: { type: 'string' },
                                message: 'must be string',
                              },
                            ];
                            return false;
                          }
                          var valid3 = _errs7 === errors;
                        } else {
                          var valid3 = true;
                        }
                        if (valid3) {
                          if (data1.formSubmissionSessionId !== undefined) {
                            const _errs9 = errors;
                            if (typeof data1.formSubmissionSessionId !== 'string') {
                              validate93.errors = [
                                {
                                  instancePath:
                                    instancePath + '/value/payload/formSubmissionSessionId',
                                  schemaPath:
                                    './value.json/properties/payload/properties/formSubmissionSessionId/type',
                                  keyword: 'type',
                                  params: { type: 'string' },
                                  message: 'must be string',
                                },
                              ];
                              return false;
                            }
                            var valid3 = _errs9 === errors;
                          } else {
                            var valid3 = true;
                          }
                          if (valid3) {
                            if (data1.formData !== undefined) {
                              let data4 = data1.formData;
                              const _errs11 = errors;
                              if (errors === _errs11) {
                                if (!(data4 && typeof data4 == 'object' && !Array.isArray(data4))) {
                                  validate93.errors = [
                                    {
                                      instancePath: instancePath + '/value/payload/formData',
                                      schemaPath:
                                        './value.json/properties/payload/properties/formData/type',
                                      keyword: 'type',
                                      params: { type: 'object' },
                                      message: 'must be object',
                                    },
                                  ];
                                  return false;
                                }
                              }
                              var valid3 = _errs11 === errors;
                            } else {
                              var valid3 = true;
                            }
                            if (valid3) {
                              if (data1.finalStep !== undefined) {
                                const _errs14 = errors;
                                if (typeof data1.finalStep !== 'boolean') {
                                  validate93.errors = [
                                    {
                                      instancePath: instancePath + '/value/payload/finalStep',
                                      schemaPath:
                                        './value.json/properties/payload/properties/finalStep/type',
                                      keyword: 'type',
                                      params: { type: 'boolean' },
                                      message: 'must be boolean',
                                    },
                                  ];
                                  return false;
                                }
                                var valid3 = _errs14 === errors;
                              } else {
                                var valid3 = true;
                              }
                              if (valid3) {
                                if (data1.submissionPageUrl !== undefined) {
                                  let data6 = data1.submissionPageUrl;
                                  const _errs16 = errors;
                                  if (typeof data6 !== 'string' && data6 !== null) {
                                    validate93.errors = [
                                      {
                                        instancePath:
                                          instancePath + '/value/payload/submissionPageUrl',
                                        schemaPath:
                                          './value.json/properties/payload/properties/submissionPageUrl/type',
                                        keyword: 'type',
                                        params: {
                                          type: schema96.properties.payload.properties
                                            .submissionPageUrl.type,
                                        },
                                        message: 'must be string,null',
                                      },
                                    ];
                                    return false;
                                  }
                                  var valid3 = _errs16 === errors;
                                } else {
                                  var valid3 = true;
                                }
                                if (valid3) {
                                  if (data1.createdAt !== undefined) {
                                    const _errs18 = errors;
                                    if (typeof data1.createdAt !== 'string') {
                                      validate93.errors = [
                                        {
                                          instancePath: instancePath + '/value/payload/createdAt',
                                          schemaPath:
                                            './value.json/properties/payload/properties/createdAt/type',
                                          keyword: 'type',
                                          params: { type: 'string' },
                                          message: 'must be string',
                                        },
                                      ];
                                      return false;
                                    }
                                    var valid3 = _errs18 === errors;
                                  } else {
                                    var valid3 = true;
                                  }
                                  if (valid3) {
                                    if (data1.submitterIpAddress !== undefined) {
                                      let data8 = data1.submitterIpAddress;
                                      const _errs20 = errors;
                                      if (typeof data8 !== 'string' && data8 !== null) {
                                        validate93.errors = [
                                          {
                                            instancePath:
                                              instancePath + '/value/payload/submitterIpAddress',
                                            schemaPath:
                                              './value.json/properties/payload/properties/submitterIpAddress/type',
                                            keyword: 'type',
                                            params: {
                                              type: schema96.properties.payload.properties
                                                .submitterIpAddress.type,
                                            },
                                            message: 'must be string,null',
                                          },
                                        ];
                                        return false;
                                      }
                                      var valid3 = _errs20 === errors;
                                    } else {
                                      var valid3 = true;
                                    }
                                    if (valid3) {
                                      if (data1.submitterUser !== undefined) {
                                        let data9 = data1.submitterUser;
                                        const _errs22 = errors;
                                        if (
                                          !(
                                            data9 &&
                                            typeof data9 == 'object' &&
                                            !Array.isArray(data9)
                                          ) &&
                                          data9 !== null
                                        ) {
                                          validate93.errors = [
                                            {
                                              instancePath:
                                                instancePath + '/value/payload/submitterUser',
                                              schemaPath:
                                                './value.json/properties/payload/properties/submitterUser/type',
                                              keyword: 'type',
                                              params: {
                                                type: schema96.properties.payload.properties
                                                  .submitterUser.type,
                                              },
                                              message: 'must be object,null',
                                            },
                                          ];
                                          return false;
                                        }
                                        if (errors === _errs22) {
                                          if (
                                            data9 &&
                                            typeof data9 == 'object' &&
                                            !Array.isArray(data9)
                                          ) {
                                            let missing3;
                                            if (
                                              (data9.id === undefined && (missing3 = 'id')) ||
                                              (data9.email === undefined && (missing3 = 'email')) ||
                                              (data9.firstName === undefined &&
                                                (missing3 = 'firstName')) ||
                                              (data9.lastName === undefined &&
                                                (missing3 = 'lastName'))
                                            ) {
                                              validate93.errors = [
                                                {
                                                  instancePath:
                                                    instancePath + '/value/payload/submitterUser',
                                                  schemaPath:
                                                    './value.json/properties/payload/properties/submitterUser/required',
                                                  keyword: 'required',
                                                  params: { missingProperty: missing3 },
                                                  message:
                                                    "must have required property '" +
                                                    missing3 +
                                                    "'",
                                                },
                                              ];
                                              return false;
                                            } else {
                                              if (data9.id !== undefined) {
                                                const _errs24 = errors;
                                                if (typeof data9.id !== 'string') {
                                                  validate93.errors = [
                                                    {
                                                      instancePath:
                                                        instancePath +
                                                        '/value/payload/submitterUser/id',
                                                      schemaPath:
                                                        './value.json/properties/payload/properties/submitterUser/properties/id/type',
                                                      keyword: 'type',
                                                      params: { type: 'string' },
                                                      message: 'must be string',
                                                    },
                                                  ];
                                                  return false;
                                                }
                                                var valid4 = _errs24 === errors;
                                              } else {
                                                var valid4 = true;
                                              }
                                              if (valid4) {
                                                if (data9.email !== undefined) {
                                                  const _errs26 = errors;
                                                  if (typeof data9.email !== 'string') {
                                                    validate93.errors = [
                                                      {
                                                        instancePath:
                                                          instancePath +
                                                          '/value/payload/submitterUser/email',
                                                        schemaPath:
                                                          './value.json/properties/payload/properties/submitterUser/properties/email/type',
                                                        keyword: 'type',
                                                        params: { type: 'string' },
                                                        message: 'must be string',
                                                      },
                                                    ];
                                                    return false;
                                                  }
                                                  var valid4 = _errs26 === errors;
                                                } else {
                                                  var valid4 = true;
                                                }
                                                if (valid4) {
                                                  if (data9.firstName !== undefined) {
                                                    const _errs28 = errors;
                                                    if (typeof data9.firstName !== 'string') {
                                                      validate93.errors = [
                                                        {
                                                          instancePath:
                                                            instancePath +
                                                            '/value/payload/submitterUser/firstName',
                                                          schemaPath:
                                                            './value.json/properties/payload/properties/submitterUser/properties/firstName/type',
                                                          keyword: 'type',
                                                          params: { type: 'string' },
                                                          message: 'must be string',
                                                        },
                                                      ];
                                                      return false;
                                                    }
                                                    var valid4 = _errs28 === errors;
                                                  } else {
                                                    var valid4 = true;
                                                  }
                                                  if (valid4) {
                                                    if (data9.lastName !== undefined) {
                                                      const _errs30 = errors;
                                                      if (typeof data9.lastName !== 'string') {
                                                        validate93.errors = [
                                                          {
                                                            instancePath:
                                                              instancePath +
                                                              '/value/payload/submitterUser/lastName',
                                                            schemaPath:
                                                              './value.json/properties/payload/properties/submitterUser/properties/lastName/type',
                                                            keyword: 'type',
                                                            params: { type: 'string' },
                                                            message: 'must be string',
                                                          },
                                                        ];
                                                        return false;
                                                      }
                                                      var valid4 = _errs30 === errors;
                                                    } else {
                                                      var valid4 = true;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        var valid3 = _errs22 === errors;
                                      } else {
                                        var valid3 = true;
                                      }
                                      if (valid3) {
                                        if (data1.latestSubmissionsByStep !== undefined) {
                                          let data14 = data1.latestSubmissionsByStep;
                                          const _errs32 = errors;
                                          if (errors === _errs32) {
                                            if (Array.isArray(data14)) {
                                              var valid5 = true;
                                              const len0 = data14.length;
                                              for (let i0 = 0; i0 < len0; i0++) {
                                                let data15 = data14[i0];
                                                const _errs34 = errors;
                                                if (errors === _errs34) {
                                                  if (
                                                    data15 &&
                                                    typeof data15 == 'object' &&
                                                    !Array.isArray(data15)
                                                  ) {
                                                    let missing4;
                                                    if (
                                                      (data15.id === undefined &&
                                                        (missing4 = 'id')) ||
                                                      (data15.step === undefined &&
                                                        (missing4 = 'step')) ||
                                                      (data15.formData === undefined &&
                                                        (missing4 = 'formData')) ||
                                                      (data15.submitterIpAddress === undefined &&
                                                        (missing4 = 'submitterIpAddress')) ||
                                                      (data15.createdAt === undefined &&
                                                        (missing4 = 'createdAt'))
                                                    ) {
                                                      validate93.errors = [
                                                        {
                                                          instancePath:
                                                            instancePath +
                                                            '/value/payload/latestSubmissionsByStep/' +
                                                            i0,
                                                          schemaPath:
                                                            './value.json/properties/payload/properties/latestSubmissionsByStep/items/required',
                                                          keyword: 'required',
                                                          params: { missingProperty: missing4 },
                                                          message:
                                                            "must have required property '" +
                                                            missing4 +
                                                            "'",
                                                        },
                                                      ];
                                                      return false;
                                                    } else {
                                                      if (data15.id !== undefined) {
                                                        const _errs36 = errors;
                                                        if (typeof data15.id !== 'string') {
                                                          validate93.errors = [
                                                            {
                                                              instancePath:
                                                                instancePath +
                                                                '/value/payload/latestSubmissionsByStep/' +
                                                                i0 +
                                                                '/id',
                                                              schemaPath:
                                                                './value.json/properties/payload/properties/latestSubmissionsByStep/items/properties/id/type',
                                                              keyword: 'type',
                                                              params: { type: 'string' },
                                                              message: 'must be string',
                                                            },
                                                          ];
                                                          return false;
                                                        }
                                                        var valid6 = _errs36 === errors;
                                                      } else {
                                                        var valid6 = true;
                                                      }
                                                      if (valid6) {
                                                        if (data15.step !== undefined) {
                                                          let data17 = data15.step;
                                                          const _errs38 = errors;
                                                          if (errors === _errs38) {
                                                            if (
                                                              data17 &&
                                                              typeof data17 == 'object' &&
                                                              !Array.isArray(data17)
                                                            ) {
                                                              let missing5;
                                                              if (
                                                                (data17.id === undefined &&
                                                                  (missing5 = 'id')) ||
                                                                (data17.name === undefined &&
                                                                  (missing5 = 'name')) ||
                                                                (data17.position === undefined &&
                                                                  (missing5 = 'position'))
                                                              ) {
                                                                validate93.errors = [
                                                                  {
                                                                    instancePath:
                                                                      instancePath +
                                                                      '/value/payload/latestSubmissionsByStep/' +
                                                                      i0 +
                                                                      '/step',
                                                                    schemaPath:
                                                                      './value.json/properties/payload/properties/latestSubmissionsByStep/items/properties/step/required',
                                                                    keyword: 'required',
                                                                    params: {
                                                                      missingProperty: missing5,
                                                                    },
                                                                    message:
                                                                      "must have required property '" +
                                                                      missing5 +
                                                                      "'",
                                                                  },
                                                                ];
                                                                return false;
                                                              } else {
                                                                if (data17.id !== undefined) {
                                                                  const _errs40 = errors;
                                                                  if (
                                                                    typeof data17.id !== 'string'
                                                                  ) {
                                                                    validate93.errors = [
                                                                      {
                                                                        instancePath:
                                                                          instancePath +
                                                                          '/value/payload/latestSubmissionsByStep/' +
                                                                          i0 +
                                                                          '/step/id',
                                                                        schemaPath:
                                                                          './value.json/properties/payload/properties/latestSubmissionsByStep/items/properties/step/properties/id/type',
                                                                        keyword: 'type',
                                                                        params: { type: 'string' },
                                                                        message: 'must be string',
                                                                      },
                                                                    ];
                                                                    return false;
                                                                  }
                                                                  var valid7 = _errs40 === errors;
                                                                } else {
                                                                  var valid7 = true;
                                                                }
                                                                if (valid7) {
                                                                  if (data17.name !== undefined) {
                                                                    const _errs42 = errors;
                                                                    if (
                                                                      typeof data17.name !==
                                                                      'string'
                                                                    ) {
                                                                      validate93.errors = [
                                                                        {
                                                                          instancePath:
                                                                            instancePath +
                                                                            '/value/payload/latestSubmissionsByStep/' +
                                                                            i0 +
                                                                            '/step/name',
                                                                          schemaPath:
                                                                            './value.json/properties/payload/properties/latestSubmissionsByStep/items/properties/step/properties/name/type',
                                                                          keyword: 'type',
                                                                          params: {
                                                                            type: 'string',
                                                                          },
                                                                          message: 'must be string',
                                                                        },
                                                                      ];
                                                                      return false;
                                                                    }
                                                                    var valid7 = _errs42 === errors;
                                                                  } else {
                                                                    var valid7 = true;
                                                                  }
                                                                  if (valid7) {
                                                                    if (
                                                                      data17.position !== undefined
                                                                    ) {
                                                                      const _errs44 = errors;
                                                                      if (
                                                                        typeof data17.position !==
                                                                        'string'
                                                                      ) {
                                                                        validate93.errors = [
                                                                          {
                                                                            instancePath:
                                                                              instancePath +
                                                                              '/value/payload/latestSubmissionsByStep/' +
                                                                              i0 +
                                                                              '/step/position',
                                                                            schemaPath:
                                                                              './value.json/properties/payload/properties/latestSubmissionsByStep/items/properties/step/properties/position/type',
                                                                            keyword: 'type',
                                                                            params: {
                                                                              type: 'string',
                                                                            },
                                                                            message:
                                                                              'must be string',
                                                                          },
                                                                        ];
                                                                        return false;
                                                                      }
                                                                      var valid7 =
                                                                        _errs44 === errors;
                                                                    } else {
                                                                      var valid7 = true;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            } else {
                                                              validate93.errors = [
                                                                {
                                                                  instancePath:
                                                                    instancePath +
                                                                    '/value/payload/latestSubmissionsByStep/' +
                                                                    i0 +
                                                                    '/step',
                                                                  schemaPath:
                                                                    './value.json/properties/payload/properties/latestSubmissionsByStep/items/properties/step/type',
                                                                  keyword: 'type',
                                                                  params: { type: 'object' },
                                                                  message: 'must be object',
                                                                },
                                                              ];
                                                              return false;
                                                            }
                                                          }
                                                          var valid6 = _errs38 === errors;
                                                        } else {
                                                          var valid6 = true;
                                                        }
                                                        if (valid6) {
                                                          if (data15.formData !== undefined) {
                                                            let data21 = data15.formData;
                                                            const _errs46 = errors;
                                                            if (errors === _errs46) {
                                                              if (
                                                                !(
                                                                  data21 &&
                                                                  typeof data21 == 'object' &&
                                                                  !Array.isArray(data21)
                                                                )
                                                              ) {
                                                                validate93.errors = [
                                                                  {
                                                                    instancePath:
                                                                      instancePath +
                                                                      '/value/payload/latestSubmissionsByStep/' +
                                                                      i0 +
                                                                      '/formData',
                                                                    schemaPath:
                                                                      './value.json/properties/payload/properties/latestSubmissionsByStep/items/properties/formData/type',
                                                                    keyword: 'type',
                                                                    params: { type: 'object' },
                                                                    message: 'must be object',
                                                                  },
                                                                ];
                                                                return false;
                                                              }
                                                            }
                                                            var valid6 = _errs46 === errors;
                                                          } else {
                                                            var valid6 = true;
                                                          }
                                                          if (valid6) {
                                                            if (
                                                              data15.submitterIpAddress !==
                                                              undefined
                                                            ) {
                                                              let data22 =
                                                                data15.submitterIpAddress;
                                                              const _errs49 = errors;
                                                              if (
                                                                typeof data22 !== 'string' &&
                                                                data22 !== null
                                                              ) {
                                                                validate93.errors = [
                                                                  {
                                                                    instancePath:
                                                                      instancePath +
                                                                      '/value/payload/latestSubmissionsByStep/' +
                                                                      i0 +
                                                                      '/submitterIpAddress',
                                                                    schemaPath:
                                                                      './value.json/properties/payload/properties/latestSubmissionsByStep/items/properties/submitterIpAddress/type',
                                                                    keyword: 'type',
                                                                    params: {
                                                                      type: schema96.properties
                                                                        .payload.properties
                                                                        .latestSubmissionsByStep
                                                                        .items.properties
                                                                        .submitterIpAddress.type,
                                                                    },
                                                                    message: 'must be string,null',
                                                                  },
                                                                ];
                                                                return false;
                                                              }
                                                              var valid6 = _errs49 === errors;
                                                            } else {
                                                              var valid6 = true;
                                                            }
                                                            if (valid6) {
                                                              if (data15.createdAt !== undefined) {
                                                                const _errs51 = errors;
                                                                if (
                                                                  typeof data15.createdAt !==
                                                                  'string'
                                                                ) {
                                                                  validate93.errors = [
                                                                    {
                                                                      instancePath:
                                                                        instancePath +
                                                                        '/value/payload/latestSubmissionsByStep/' +
                                                                        i0 +
                                                                        '/createdAt',
                                                                      schemaPath:
                                                                        './value.json/properties/payload/properties/latestSubmissionsByStep/items/properties/createdAt/type',
                                                                      keyword: 'type',
                                                                      params: { type: 'string' },
                                                                      message: 'must be string',
                                                                    },
                                                                  ];
                                                                  return false;
                                                                }
                                                                var valid6 = _errs51 === errors;
                                                              } else {
                                                                var valid6 = true;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  } else {
                                                    validate93.errors = [
                                                      {
                                                        instancePath:
                                                          instancePath +
                                                          '/value/payload/latestSubmissionsByStep/' +
                                                          i0,
                                                        schemaPath:
                                                          './value.json/properties/payload/properties/latestSubmissionsByStep/items/type',
                                                        keyword: 'type',
                                                        params: { type: 'object' },
                                                        message: 'must be object',
                                                      },
                                                    ];
                                                    return false;
                                                  }
                                                }
                                                var valid5 = _errs34 === errors;
                                                if (!valid5) {
                                                  break;
                                                }
                                              }
                                            } else {
                                              validate93.errors = [
                                                {
                                                  instancePath:
                                                    instancePath +
                                                    '/value/payload/latestSubmissionsByStep',
                                                  schemaPath:
                                                    './value.json/properties/payload/properties/latestSubmissionsByStep/type',
                                                  keyword: 'type',
                                                  params: { type: 'array' },
                                                  message: 'must be array',
                                                },
                                              ];
                                              return false;
                                            }
                                          }
                                          var valid3 = _errs32 === errors;
                                        } else {
                                          var valid3 = true;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      validate93.errors = [
                        {
                          instancePath: instancePath + '/value/payload',
                          schemaPath: './value.json/properties/payload/type',
                          keyword: 'type',
                          params: { type: 'object' },
                          message: 'must be object',
                        },
                      ];
                      return false;
                    }
                  }
                }
              }
            } else {
              validate93.errors = [
                {
                  instancePath: instancePath + '/value',
                  schemaPath: './value.json/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.context !== undefined) {
            let data24 = data.context;
            const _errs53 = errors;
            const _errs54 = errors;
            if (errors === _errs54) {
              if (data24 && typeof data24 == 'object' && !Array.isArray(data24)) {
                let missing6;
                if (
                  data24.formSubmissionActionId === undefined &&
                  (missing6 = 'formSubmissionActionId')
                ) {
                  validate93.errors = [
                    {
                      instancePath: instancePath + '/context',
                      schemaPath: './context.json/required',
                      keyword: 'required',
                      params: { missingProperty: missing6 },
                      message: "must have required property '" + missing6 + "'",
                    },
                  ];
                  return false;
                } else {
                  if (data24.formSubmissionActionId !== undefined) {
                    if (typeof data24.formSubmissionActionId !== 'string') {
                      validate93.errors = [
                        {
                          instancePath: instancePath + '/context/formSubmissionActionId',
                          schemaPath: './context.json/properties/formSubmissionActionId/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                  }
                }
              } else {
                validate93.errors = [
                  {
                    instancePath: instancePath + '/context',
                    schemaPath: './context.json/type',
                    keyword: 'type',
                    params: { type: 'object' },
                    message: 'must be object',
                  },
                ];
                return false;
              }
            }
            var valid0 = _errs53 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate93.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate93.errors = vErrors;
  return errors === 0;
}
validate93.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateBeforeSubmitFormWebhookResult = validate94;
const schema98 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-submit-form-webhook/result.json',
  title: 'BeforeSubmitFormWebhookResult',
  oneOf: [
    {
      type: 'object',
      properties: {
        value: { $ref: './value.json' },
        stop: {
          description:
            'If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.',
          type: ['boolean', 'null'],
        },
      },
      required: ['value'],
    },
    { $ref: '../../hook-reject-result/hook-reject-result.json' },
  ],
};
function validate94(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-submit-form-webhook/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate94.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.value === undefined && (missing0 = 'value')) {
        const err0 = {
          instancePath,
          schemaPath: '#/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.value !== undefined) {
          let data0 = data.value;
          const _errs3 = errors;
          const _errs4 = errors;
          if (errors === _errs4) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1;
              if (data0.payload === undefined && (missing1 = 'payload')) {
                const err1 = {
                  instancePath: instancePath + '/value',
                  schemaPath: './value.json/required',
                  keyword: 'required',
                  params: { missingProperty: missing1 },
                  message: "must have required property '" + missing1 + "'",
                };
                if (vErrors === null) {
                  vErrors = [err1];
                } else {
                  vErrors.push(err1);
                }
                errors++;
              } else {
                if (data0.payload !== undefined) {
                  let data1 = data0.payload;
                  const _errs6 = errors;
                  if (errors === _errs6) {
                    if (data1 && typeof data1 == 'object' && !Array.isArray(data1)) {
                      let missing2;
                      if (
                        (data1.formId === undefined && (missing2 = 'formId')) ||
                        (data1.formSubmissionSessionId === undefined &&
                          (missing2 = 'formSubmissionSessionId')) ||
                        (data1.formData === undefined && (missing2 = 'formData')) ||
                        (data1.finalStep === undefined && (missing2 = 'finalStep')) ||
                        (data1.submissionPageUrl === undefined &&
                          (missing2 = 'submissionPageUrl')) ||
                        (data1.createdAt === undefined && (missing2 = 'createdAt')) ||
                        (data1.submitterIpAddress === undefined &&
                          (missing2 = 'submitterIpAddress')) ||
                        (data1.submitterUser === undefined && (missing2 = 'submitterUser')) ||
                        (data1.latestSubmissionsByStep === undefined &&
                          (missing2 = 'latestSubmissionsByStep'))
                      ) {
                        const err2 = {
                          instancePath: instancePath + '/value/payload',
                          schemaPath: './value.json/properties/payload/required',
                          keyword: 'required',
                          params: { missingProperty: missing2 },
                          message: "must have required property '" + missing2 + "'",
                        };
                        if (vErrors === null) {
                          vErrors = [err2];
                        } else {
                          vErrors.push(err2);
                        }
                        errors++;
                      } else {
                        if (data1.formId !== undefined) {
                          const _errs9 = errors;
                          if (typeof data1.formId !== 'string') {
                            const err3 = {
                              instancePath: instancePath + '/value/payload/formId',
                              schemaPath: './value.json/properties/payload/properties/formId/type',
                              keyword: 'type',
                              params: { type: 'string' },
                              message: 'must be string',
                            };
                            if (vErrors === null) {
                              vErrors = [err3];
                            } else {
                              vErrors.push(err3);
                            }
                            errors++;
                          }
                          var valid4 = _errs9 === errors;
                        } else {
                          var valid4 = true;
                        }
                        if (valid4) {
                          if (data1.formSubmissionSessionId !== undefined) {
                            const _errs11 = errors;
                            if (typeof data1.formSubmissionSessionId !== 'string') {
                              const err4 = {
                                instancePath:
                                  instancePath + '/value/payload/formSubmissionSessionId',
                                schemaPath:
                                  './value.json/properties/payload/properties/formSubmissionSessionId/type',
                                keyword: 'type',
                                params: { type: 'string' },
                                message: 'must be string',
                              };
                              if (vErrors === null) {
                                vErrors = [err4];
                              } else {
                                vErrors.push(err4);
                              }
                              errors++;
                            }
                            var valid4 = _errs11 === errors;
                          } else {
                            var valid4 = true;
                          }
                          if (valid4) {
                            if (data1.formData !== undefined) {
                              let data4 = data1.formData;
                              const _errs13 = errors;
                              if (errors === _errs13) {
                                if (!(data4 && typeof data4 == 'object' && !Array.isArray(data4))) {
                                  const err5 = {
                                    instancePath: instancePath + '/value/payload/formData',
                                    schemaPath:
                                      './value.json/properties/payload/properties/formData/type',
                                    keyword: 'type',
                                    params: { type: 'object' },
                                    message: 'must be object',
                                  };
                                  if (vErrors === null) {
                                    vErrors = [err5];
                                  } else {
                                    vErrors.push(err5);
                                  }
                                  errors++;
                                }
                              }
                              var valid4 = _errs13 === errors;
                            } else {
                              var valid4 = true;
                            }
                            if (valid4) {
                              if (data1.finalStep !== undefined) {
                                const _errs16 = errors;
                                if (typeof data1.finalStep !== 'boolean') {
                                  const err6 = {
                                    instancePath: instancePath + '/value/payload/finalStep',
                                    schemaPath:
                                      './value.json/properties/payload/properties/finalStep/type',
                                    keyword: 'type',
                                    params: { type: 'boolean' },
                                    message: 'must be boolean',
                                  };
                                  if (vErrors === null) {
                                    vErrors = [err6];
                                  } else {
                                    vErrors.push(err6);
                                  }
                                  errors++;
                                }
                                var valid4 = _errs16 === errors;
                              } else {
                                var valid4 = true;
                              }
                              if (valid4) {
                                if (data1.submissionPageUrl !== undefined) {
                                  let data6 = data1.submissionPageUrl;
                                  const _errs18 = errors;
                                  if (typeof data6 !== 'string' && data6 !== null) {
                                    const err7 = {
                                      instancePath:
                                        instancePath + '/value/payload/submissionPageUrl',
                                      schemaPath:
                                        './value.json/properties/payload/properties/submissionPageUrl/type',
                                      keyword: 'type',
                                      params: {
                                        type: schema96.properties.payload.properties
                                          .submissionPageUrl.type,
                                      },
                                      message: 'must be string,null',
                                    };
                                    if (vErrors === null) {
                                      vErrors = [err7];
                                    } else {
                                      vErrors.push(err7);
                                    }
                                    errors++;
                                  }
                                  var valid4 = _errs18 === errors;
                                } else {
                                  var valid4 = true;
                                }
                                if (valid4) {
                                  if (data1.createdAt !== undefined) {
                                    const _errs20 = errors;
                                    if (typeof data1.createdAt !== 'string') {
                                      const err8 = {
                                        instancePath: instancePath + '/value/payload/createdAt',
                                        schemaPath:
                                          './value.json/properties/payload/properties/createdAt/type',
                                        keyword: 'type',
                                        params: { type: 'string' },
                                        message: 'must be string',
                                      };
                                      if (vErrors === null) {
                                        vErrors = [err8];
                                      } else {
                                        vErrors.push(err8);
                                      }
                                      errors++;
                                    }
                                    var valid4 = _errs20 === errors;
                                  } else {
                                    var valid4 = true;
                                  }
                                  if (valid4) {
                                    if (data1.submitterIpAddress !== undefined) {
                                      let data8 = data1.submitterIpAddress;
                                      const _errs22 = errors;
                                      if (typeof data8 !== 'string' && data8 !== null) {
                                        const err9 = {
                                          instancePath:
                                            instancePath + '/value/payload/submitterIpAddress',
                                          schemaPath:
                                            './value.json/properties/payload/properties/submitterIpAddress/type',
                                          keyword: 'type',
                                          params: {
                                            type: schema96.properties.payload.properties
                                              .submitterIpAddress.type,
                                          },
                                          message: 'must be string,null',
                                        };
                                        if (vErrors === null) {
                                          vErrors = [err9];
                                        } else {
                                          vErrors.push(err9);
                                        }
                                        errors++;
                                      }
                                      var valid4 = _errs22 === errors;
                                    } else {
                                      var valid4 = true;
                                    }
                                    if (valid4) {
                                      if (data1.submitterUser !== undefined) {
                                        let data9 = data1.submitterUser;
                                        const _errs24 = errors;
                                        if (
                                          !(
                                            data9 &&
                                            typeof data9 == 'object' &&
                                            !Array.isArray(data9)
                                          ) &&
                                          data9 !== null
                                        ) {
                                          const err10 = {
                                            instancePath:
                                              instancePath + '/value/payload/submitterUser',
                                            schemaPath:
                                              './value.json/properties/payload/properties/submitterUser/type',
                                            keyword: 'type',
                                            params: {
                                              type: schema96.properties.payload.properties
                                                .submitterUser.type,
                                            },
                                            message: 'must be object,null',
                                          };
                                          if (vErrors === null) {
                                            vErrors = [err10];
                                          } else {
                                            vErrors.push(err10);
                                          }
                                          errors++;
                                        }
                                        if (errors === _errs24) {
                                          if (
                                            data9 &&
                                            typeof data9 == 'object' &&
                                            !Array.isArray(data9)
                                          ) {
                                            let missing3;
                                            if (
                                              (data9.id === undefined && (missing3 = 'id')) ||
                                              (data9.email === undefined && (missing3 = 'email')) ||
                                              (data9.firstName === undefined &&
                                                (missing3 = 'firstName')) ||
                                              (data9.lastName === undefined &&
                                                (missing3 = 'lastName'))
                                            ) {
                                              const err11 = {
                                                instancePath:
                                                  instancePath + '/value/payload/submitterUser',
                                                schemaPath:
                                                  './value.json/properties/payload/properties/submitterUser/required',
                                                keyword: 'required',
                                                params: { missingProperty: missing3 },
                                                message:
                                                  "must have required property '" + missing3 + "'",
                                              };
                                              if (vErrors === null) {
                                                vErrors = [err11];
                                              } else {
                                                vErrors.push(err11);
                                              }
                                              errors++;
                                            } else {
                                              if (data9.id !== undefined) {
                                                const _errs26 = errors;
                                                if (typeof data9.id !== 'string') {
                                                  const err12 = {
                                                    instancePath:
                                                      instancePath +
                                                      '/value/payload/submitterUser/id',
                                                    schemaPath:
                                                      './value.json/properties/payload/properties/submitterUser/properties/id/type',
                                                    keyword: 'type',
                                                    params: { type: 'string' },
                                                    message: 'must be string',
                                                  };
                                                  if (vErrors === null) {
                                                    vErrors = [err12];
                                                  } else {
                                                    vErrors.push(err12);
                                                  }
                                                  errors++;
                                                }
                                                var valid5 = _errs26 === errors;
                                              } else {
                                                var valid5 = true;
                                              }
                                              if (valid5) {
                                                if (data9.email !== undefined) {
                                                  const _errs28 = errors;
                                                  if (typeof data9.email !== 'string') {
                                                    const err13 = {
                                                      instancePath:
                                                        instancePath +
                                                        '/value/payload/submitterUser/email',
                                                      schemaPath:
                                                        './value.json/properties/payload/properties/submitterUser/properties/email/type',
                                                      keyword: 'type',
                                                      params: { type: 'string' },
                                                      message: 'must be string',
                                                    };
                                                    if (vErrors === null) {
                                                      vErrors = [err13];
                                                    } else {
                                                      vErrors.push(err13);
                                                    }
                                                    errors++;
                                                  }
                                                  var valid5 = _errs28 === errors;
                                                } else {
                                                  var valid5 = true;
                                                }
                                                if (valid5) {
                                                  if (data9.firstName !== undefined) {
                                                    const _errs30 = errors;
                                                    if (typeof data9.firstName !== 'string') {
                                                      const err14 = {
                                                        instancePath:
                                                          instancePath +
                                                          '/value/payload/submitterUser/firstName',
                                                        schemaPath:
                                                          './value.json/properties/payload/properties/submitterUser/properties/firstName/type',
                                                        keyword: 'type',
                                                        params: { type: 'string' },
                                                        message: 'must be string',
                                                      };
                                                      if (vErrors === null) {
                                                        vErrors = [err14];
                                                      } else {
                                                        vErrors.push(err14);
                                                      }
                                                      errors++;
                                                    }
                                                    var valid5 = _errs30 === errors;
                                                  } else {
                                                    var valid5 = true;
                                                  }
                                                  if (valid5) {
                                                    if (data9.lastName !== undefined) {
                                                      const _errs32 = errors;
                                                      if (typeof data9.lastName !== 'string') {
                                                        const err15 = {
                                                          instancePath:
                                                            instancePath +
                                                            '/value/payload/submitterUser/lastName',
                                                          schemaPath:
                                                            './value.json/properties/payload/properties/submitterUser/properties/lastName/type',
                                                          keyword: 'type',
                                                          params: { type: 'string' },
                                                          message: 'must be string',
                                                        };
                                                        if (vErrors === null) {
                                                          vErrors = [err15];
                                                        } else {
                                                          vErrors.push(err15);
                                                        }
                                                        errors++;
                                                      }
                                                      var valid5 = _errs32 === errors;
                                                    } else {
                                                      var valid5 = true;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        var valid4 = _errs24 === errors;
                                      } else {
                                        var valid4 = true;
                                      }
                                      if (valid4) {
                                        if (data1.latestSubmissionsByStep !== undefined) {
                                          let data14 = data1.latestSubmissionsByStep;
                                          const _errs34 = errors;
                                          if (errors === _errs34) {
                                            if (Array.isArray(data14)) {
                                              var valid6 = true;
                                              const len0 = data14.length;
                                              for (let i0 = 0; i0 < len0; i0++) {
                                                let data15 = data14[i0];
                                                const _errs36 = errors;
                                                if (errors === _errs36) {
                                                  if (
                                                    data15 &&
                                                    typeof data15 == 'object' &&
                                                    !Array.isArray(data15)
                                                  ) {
                                                    let missing4;
                                                    if (
                                                      (data15.id === undefined &&
                                                        (missing4 = 'id')) ||
                                                      (data15.step === undefined &&
                                                        (missing4 = 'step')) ||
                                                      (data15.formData === undefined &&
                                                        (missing4 = 'formData')) ||
                                                      (data15.submitterIpAddress === undefined &&
                                                        (missing4 = 'submitterIpAddress')) ||
                                                      (data15.createdAt === undefined &&
                                                        (missing4 = 'createdAt'))
                                                    ) {
                                                      const err16 = {
                                                        instancePath:
                                                          instancePath +
                                                          '/value/payload/latestSubmissionsByStep/' +
                                                          i0,
                                                        schemaPath:
                                                          './value.json/properties/payload/properties/latestSubmissionsByStep/items/required',
                                                        keyword: 'required',
                                                        params: { missingProperty: missing4 },
                                                        message:
                                                          "must have required property '" +
                                                          missing4 +
                                                          "'",
                                                      };
                                                      if (vErrors === null) {
                                                        vErrors = [err16];
                                                      } else {
                                                        vErrors.push(err16);
                                                      }
                                                      errors++;
                                                    } else {
                                                      if (data15.id !== undefined) {
                                                        const _errs38 = errors;
                                                        if (typeof data15.id !== 'string') {
                                                          const err17 = {
                                                            instancePath:
                                                              instancePath +
                                                              '/value/payload/latestSubmissionsByStep/' +
                                                              i0 +
                                                              '/id',
                                                            schemaPath:
                                                              './value.json/properties/payload/properties/latestSubmissionsByStep/items/properties/id/type',
                                                            keyword: 'type',
                                                            params: { type: 'string' },
                                                            message: 'must be string',
                                                          };
                                                          if (vErrors === null) {
                                                            vErrors = [err17];
                                                          } else {
                                                            vErrors.push(err17);
                                                          }
                                                          errors++;
                                                        }
                                                        var valid7 = _errs38 === errors;
                                                      } else {
                                                        var valid7 = true;
                                                      }
                                                      if (valid7) {
                                                        if (data15.step !== undefined) {
                                                          let data17 = data15.step;
                                                          const _errs40 = errors;
                                                          if (errors === _errs40) {
                                                            if (
                                                              data17 &&
                                                              typeof data17 == 'object' &&
                                                              !Array.isArray(data17)
                                                            ) {
                                                              let missing5;
                                                              if (
                                                                (data17.id === undefined &&
                                                                  (missing5 = 'id')) ||
                                                                (data17.name === undefined &&
                                                                  (missing5 = 'name')) ||
                                                                (data17.position === undefined &&
                                                                  (missing5 = 'position'))
                                                              ) {
                                                                const err18 = {
                                                                  instancePath:
                                                                    instancePath +
                                                                    '/value/payload/latestSubmissionsByStep/' +
                                                                    i0 +
                                                                    '/step',
                                                                  schemaPath:
                                                                    './value.json/properties/payload/properties/latestSubmissionsByStep/items/properties/step/required',
                                                                  keyword: 'required',
                                                                  params: {
                                                                    missingProperty: missing5,
                                                                  },
                                                                  message:
                                                                    "must have required property '" +
                                                                    missing5 +
                                                                    "'",
                                                                };
                                                                if (vErrors === null) {
                                                                  vErrors = [err18];
                                                                } else {
                                                                  vErrors.push(err18);
                                                                }
                                                                errors++;
                                                              } else {
                                                                if (data17.id !== undefined) {
                                                                  const _errs42 = errors;
                                                                  if (
                                                                    typeof data17.id !== 'string'
                                                                  ) {
                                                                    const err19 = {
                                                                      instancePath:
                                                                        instancePath +
                                                                        '/value/payload/latestSubmissionsByStep/' +
                                                                        i0 +
                                                                        '/step/id',
                                                                      schemaPath:
                                                                        './value.json/properties/payload/properties/latestSubmissionsByStep/items/properties/step/properties/id/type',
                                                                      keyword: 'type',
                                                                      params: { type: 'string' },
                                                                      message: 'must be string',
                                                                    };
                                                                    if (vErrors === null) {
                                                                      vErrors = [err19];
                                                                    } else {
                                                                      vErrors.push(err19);
                                                                    }
                                                                    errors++;
                                                                  }
                                                                  var valid8 = _errs42 === errors;
                                                                } else {
                                                                  var valid8 = true;
                                                                }
                                                                if (valid8) {
                                                                  if (data17.name !== undefined) {
                                                                    const _errs44 = errors;
                                                                    if (
                                                                      typeof data17.name !==
                                                                      'string'
                                                                    ) {
                                                                      const err20 = {
                                                                        instancePath:
                                                                          instancePath +
                                                                          '/value/payload/latestSubmissionsByStep/' +
                                                                          i0 +
                                                                          '/step/name',
                                                                        schemaPath:
                                                                          './value.json/properties/payload/properties/latestSubmissionsByStep/items/properties/step/properties/name/type',
                                                                        keyword: 'type',
                                                                        params: { type: 'string' },
                                                                        message: 'must be string',
                                                                      };
                                                                      if (vErrors === null) {
                                                                        vErrors = [err20];
                                                                      } else {
                                                                        vErrors.push(err20);
                                                                      }
                                                                      errors++;
                                                                    }
                                                                    var valid8 = _errs44 === errors;
                                                                  } else {
                                                                    var valid8 = true;
                                                                  }
                                                                  if (valid8) {
                                                                    if (
                                                                      data17.position !== undefined
                                                                    ) {
                                                                      const _errs46 = errors;
                                                                      if (
                                                                        typeof data17.position !==
                                                                        'string'
                                                                      ) {
                                                                        const err21 = {
                                                                          instancePath:
                                                                            instancePath +
                                                                            '/value/payload/latestSubmissionsByStep/' +
                                                                            i0 +
                                                                            '/step/position',
                                                                          schemaPath:
                                                                            './value.json/properties/payload/properties/latestSubmissionsByStep/items/properties/step/properties/position/type',
                                                                          keyword: 'type',
                                                                          params: {
                                                                            type: 'string',
                                                                          },
                                                                          message: 'must be string',
                                                                        };
                                                                        if (vErrors === null) {
                                                                          vErrors = [err21];
                                                                        } else {
                                                                          vErrors.push(err21);
                                                                        }
                                                                        errors++;
                                                                      }
                                                                      var valid8 =
                                                                        _errs46 === errors;
                                                                    } else {
                                                                      var valid8 = true;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            } else {
                                                              const err22 = {
                                                                instancePath:
                                                                  instancePath +
                                                                  '/value/payload/latestSubmissionsByStep/' +
                                                                  i0 +
                                                                  '/step',
                                                                schemaPath:
                                                                  './value.json/properties/payload/properties/latestSubmissionsByStep/items/properties/step/type',
                                                                keyword: 'type',
                                                                params: { type: 'object' },
                                                                message: 'must be object',
                                                              };
                                                              if (vErrors === null) {
                                                                vErrors = [err22];
                                                              } else {
                                                                vErrors.push(err22);
                                                              }
                                                              errors++;
                                                            }
                                                          }
                                                          var valid7 = _errs40 === errors;
                                                        } else {
                                                          var valid7 = true;
                                                        }
                                                        if (valid7) {
                                                          if (data15.formData !== undefined) {
                                                            let data21 = data15.formData;
                                                            const _errs48 = errors;
                                                            if (errors === _errs48) {
                                                              if (
                                                                !(
                                                                  data21 &&
                                                                  typeof data21 == 'object' &&
                                                                  !Array.isArray(data21)
                                                                )
                                                              ) {
                                                                const err23 = {
                                                                  instancePath:
                                                                    instancePath +
                                                                    '/value/payload/latestSubmissionsByStep/' +
                                                                    i0 +
                                                                    '/formData',
                                                                  schemaPath:
                                                                    './value.json/properties/payload/properties/latestSubmissionsByStep/items/properties/formData/type',
                                                                  keyword: 'type',
                                                                  params: { type: 'object' },
                                                                  message: 'must be object',
                                                                };
                                                                if (vErrors === null) {
                                                                  vErrors = [err23];
                                                                } else {
                                                                  vErrors.push(err23);
                                                                }
                                                                errors++;
                                                              }
                                                            }
                                                            var valid7 = _errs48 === errors;
                                                          } else {
                                                            var valid7 = true;
                                                          }
                                                          if (valid7) {
                                                            if (
                                                              data15.submitterIpAddress !==
                                                              undefined
                                                            ) {
                                                              let data22 =
                                                                data15.submitterIpAddress;
                                                              const _errs51 = errors;
                                                              if (
                                                                typeof data22 !== 'string' &&
                                                                data22 !== null
                                                              ) {
                                                                const err24 = {
                                                                  instancePath:
                                                                    instancePath +
                                                                    '/value/payload/latestSubmissionsByStep/' +
                                                                    i0 +
                                                                    '/submitterIpAddress',
                                                                  schemaPath:
                                                                    './value.json/properties/payload/properties/latestSubmissionsByStep/items/properties/submitterIpAddress/type',
                                                                  keyword: 'type',
                                                                  params: {
                                                                    type: schema96.properties
                                                                      .payload.properties
                                                                      .latestSubmissionsByStep.items
                                                                      .properties.submitterIpAddress
                                                                      .type,
                                                                  },
                                                                  message: 'must be string,null',
                                                                };
                                                                if (vErrors === null) {
                                                                  vErrors = [err24];
                                                                } else {
                                                                  vErrors.push(err24);
                                                                }
                                                                errors++;
                                                              }
                                                              var valid7 = _errs51 === errors;
                                                            } else {
                                                              var valid7 = true;
                                                            }
                                                            if (valid7) {
                                                              if (data15.createdAt !== undefined) {
                                                                const _errs53 = errors;
                                                                if (
                                                                  typeof data15.createdAt !==
                                                                  'string'
                                                                ) {
                                                                  const err25 = {
                                                                    instancePath:
                                                                      instancePath +
                                                                      '/value/payload/latestSubmissionsByStep/' +
                                                                      i0 +
                                                                      '/createdAt',
                                                                    schemaPath:
                                                                      './value.json/properties/payload/properties/latestSubmissionsByStep/items/properties/createdAt/type',
                                                                    keyword: 'type',
                                                                    params: { type: 'string' },
                                                                    message: 'must be string',
                                                                  };
                                                                  if (vErrors === null) {
                                                                    vErrors = [err25];
                                                                  } else {
                                                                    vErrors.push(err25);
                                                                  }
                                                                  errors++;
                                                                }
                                                                var valid7 = _errs53 === errors;
                                                              } else {
                                                                var valid7 = true;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  } else {
                                                    const err26 = {
                                                      instancePath:
                                                        instancePath +
                                                        '/value/payload/latestSubmissionsByStep/' +
                                                        i0,
                                                      schemaPath:
                                                        './value.json/properties/payload/properties/latestSubmissionsByStep/items/type',
                                                      keyword: 'type',
                                                      params: { type: 'object' },
                                                      message: 'must be object',
                                                    };
                                                    if (vErrors === null) {
                                                      vErrors = [err26];
                                                    } else {
                                                      vErrors.push(err26);
                                                    }
                                                    errors++;
                                                  }
                                                }
                                                var valid6 = _errs36 === errors;
                                                if (!valid6) {
                                                  break;
                                                }
                                              }
                                            } else {
                                              const err27 = {
                                                instancePath:
                                                  instancePath +
                                                  '/value/payload/latestSubmissionsByStep',
                                                schemaPath:
                                                  './value.json/properties/payload/properties/latestSubmissionsByStep/type',
                                                keyword: 'type',
                                                params: { type: 'array' },
                                                message: 'must be array',
                                              };
                                              if (vErrors === null) {
                                                vErrors = [err27];
                                              } else {
                                                vErrors.push(err27);
                                              }
                                              errors++;
                                            }
                                          }
                                          var valid4 = _errs34 === errors;
                                        } else {
                                          var valid4 = true;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      const err28 = {
                        instancePath: instancePath + '/value/payload',
                        schemaPath: './value.json/properties/payload/type',
                        keyword: 'type',
                        params: { type: 'object' },
                        message: 'must be object',
                      };
                      if (vErrors === null) {
                        vErrors = [err28];
                      } else {
                        vErrors.push(err28);
                      }
                      errors++;
                    }
                  }
                }
              }
            } else {
              const err29 = {
                instancePath: instancePath + '/value',
                schemaPath: './value.json/type',
                keyword: 'type',
                params: { type: 'object' },
                message: 'must be object',
              };
              if (vErrors === null) {
                vErrors = [err29];
              } else {
                vErrors.push(err29);
              }
              errors++;
            }
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.stop !== undefined) {
            let data24 = data.stop;
            const _errs55 = errors;
            if (typeof data24 !== 'boolean' && data24 !== null) {
              const err30 = {
                instancePath: instancePath + '/stop',
                schemaPath: '#/oneOf/0/properties/stop/type',
                keyword: 'type',
                params: { type: schema98.oneOf[0].properties.stop.type },
                message: 'must be boolean,null',
              };
              if (vErrors === null) {
                vErrors = [err30];
              } else {
                vErrors.push(err30);
              }
              errors++;
            }
            var valid1 = _errs55 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      const err31 = {
        instancePath,
        schemaPath: '#/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err31];
      } else {
        vErrors.push(err31);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
    var props0 = {};
    props0.value = true;
    props0.stop = true;
  }
  const _errs57 = errors;
  const _errs58 = errors;
  if (errors === _errs58) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing6;
      if (data.reject === undefined && (missing6 = 'reject')) {
        const err32 = {
          instancePath,
          schemaPath: '../../hook-reject-result/hook-reject-result.json/required',
          keyword: 'required',
          params: { missingProperty: missing6 },
          message: "must have required property '" + missing6 + "'",
        };
        if (vErrors === null) {
          vErrors = [err32];
        } else {
          vErrors.push(err32);
        }
        errors++;
      } else {
        if (data.reject !== undefined) {
          if (typeof data.reject !== 'string') {
            const err33 = {
              instancePath: instancePath + '/reject',
              schemaPath: '../../hook-reject-result/hook-reject-result.json/properties/reject/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            };
            if (vErrors === null) {
              vErrors = [err33];
            } else {
              vErrors.push(err33);
            }
            errors++;
          }
        }
      }
    } else {
      const err34 = {
        instancePath,
        schemaPath: '../../hook-reject-result/hook-reject-result.json/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err34];
      } else {
        vErrors.push(err34);
      }
      errors++;
    }
  }
  var _valid0 = _errs57 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.reject = true;
      }
    }
  }
  if (!valid0) {
    const err35 = {
      instancePath,
      schemaPath: '#/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err35];
    } else {
      vErrors.push(err35);
    }
    errors++;
    validate94.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate94.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate94.evaluated = { dynamicProps: true, dynamicItems: false };
export const validateInitialFormDataInput = validate95;
const schema101 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/initial-form-data/input.json',
  title: 'InitialFormDataInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
const schema102 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/initial-form-data/value.json',
  title: 'InitialFormDataValue',
  type: 'object',
  properties: {
    formData: {
      $ref: '../../context-data/context-data.json',
      description: 'The initial data for the form.',
    },
  },
  required: ['formData'],
};
function validate96(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/initial-form-data/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate96.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.formData === undefined && (missing0 = 'formData')) {
        validate96.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.formData !== undefined) {
          if (
            !validate20(data.formData, {
              instancePath: instancePath + '/formData',
              parentData: data,
              parentDataProperty: 'formData',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
            errors = vErrors.length;
          }
        }
      }
    } else {
      validate96.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate96.errors = vErrors;
  return errors === 0;
}
validate96.evaluated = { props: { formData: true }, dynamicProps: false, dynamicItems: false };
const schema103 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/initial-form-data/context.json',
  title: 'InitialFormDataContext',
  description: 'The context of the request.',
  allOf: [
    { $ref: '../../request-context/principal.json' },
    { $ref: '../../request-context/site.json' },
    {
      type: 'object',
      properties: {
        form: { type: 'object', properties: { id: { type: 'string' } }, required: ['id'] },
        pageUrl: {
          description: 'The full URL of the page where the form is being shown.',
          type: 'string',
        },
      },
      required: ['form', 'pageUrl'],
    },
  ],
};
function validate99(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/initial-form-data/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate99.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  if (
    !validate31(data, { instancePath, parentData, parentDataProperty, rootData, dynamicAnchors })
  ) {
    vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs1 = errors;
    const _errs2 = errors;
    if (errors === _errs2) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        if (data.site !== undefined) {
          let data0 = data.site;
          const _errs4 = errors;
          if (errors === _errs4) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing0;
              if (data0.id === undefined && (missing0 = 'id')) {
                validate99.errors = [
                  {
                    instancePath: instancePath + '/site',
                    schemaPath: '../../request-context/site.json/properties/site/required',
                    keyword: 'required',
                    params: { missingProperty: missing0 },
                    message: "must have required property '" + missing0 + "'",
                  },
                ];
                return false;
              } else {
                if (data0.id !== undefined) {
                  if (typeof data0.id !== 'string') {
                    validate99.errors = [
                      {
                        instancePath: instancePath + '/site/id',
                        schemaPath:
                          '../../request-context/site.json/properties/site/properties/id/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate99.errors = [
                {
                  instancePath: instancePath + '/site',
                  schemaPath: '../../request-context/site.json/properties/site/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
        }
      } else {
        validate99.errors = [
          {
            instancePath,
            schemaPath: '../../request-context/site.json/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object',
          },
        ];
        return false;
      }
    }
    var valid0 = _errs1 === errors;
    if (valid0) {
      const _errs8 = errors;
      if (errors === _errs8) {
        if (data && typeof data == 'object' && !Array.isArray(data)) {
          let missing1;
          if (
            (data.form === undefined && (missing1 = 'form')) ||
            (data.pageUrl === undefined && (missing1 = 'pageUrl'))
          ) {
            validate99.errors = [
              {
                instancePath,
                schemaPath: '#/allOf/2/required',
                keyword: 'required',
                params: { missingProperty: missing1 },
                message: "must have required property '" + missing1 + "'",
              },
            ];
            return false;
          } else {
            if (data.form !== undefined) {
              let data2 = data.form;
              const _errs10 = errors;
              if (errors === _errs10) {
                if (data2 && typeof data2 == 'object' && !Array.isArray(data2)) {
                  let missing2;
                  if (data2.id === undefined && (missing2 = 'id')) {
                    validate99.errors = [
                      {
                        instancePath: instancePath + '/form',
                        schemaPath: '#/allOf/2/properties/form/required',
                        keyword: 'required',
                        params: { missingProperty: missing2 },
                        message: "must have required property '" + missing2 + "'",
                      },
                    ];
                    return false;
                  } else {
                    if (data2.id !== undefined) {
                      if (typeof data2.id !== 'string') {
                        validate99.errors = [
                          {
                            instancePath: instancePath + '/form/id',
                            schemaPath: '#/allOf/2/properties/form/properties/id/type',
                            keyword: 'type',
                            params: { type: 'string' },
                            message: 'must be string',
                          },
                        ];
                        return false;
                      }
                    }
                  }
                } else {
                  validate99.errors = [
                    {
                      instancePath: instancePath + '/form',
                      schemaPath: '#/allOf/2/properties/form/type',
                      keyword: 'type',
                      params: { type: 'object' },
                      message: 'must be object',
                    },
                  ];
                  return false;
                }
              }
              var valid4 = _errs10 === errors;
            } else {
              var valid4 = true;
            }
            if (valid4) {
              if (data.pageUrl !== undefined) {
                const _errs14 = errors;
                if (typeof data.pageUrl !== 'string') {
                  validate99.errors = [
                    {
                      instancePath: instancePath + '/pageUrl',
                      schemaPath: '#/allOf/2/properties/pageUrl/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    },
                  ];
                  return false;
                }
                var valid4 = _errs14 === errors;
              } else {
                var valid4 = true;
              }
            }
          }
        } else {
          validate99.errors = [
            {
              instancePath,
              schemaPath: '#/allOf/2/type',
              keyword: 'type',
              params: { type: 'object' },
              message: 'must be object',
            },
          ];
          return false;
        }
      }
      var valid0 = _errs8 === errors;
    }
  }
  validate99.errors = vErrors;
  return errors === 0;
}
validate99.evaluated = {
  props: { form: true, pageUrl: true, site: true, principal: true },
  dynamicProps: false,
  dynamicItems: false,
};
function validate95(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/initial-form-data/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate95.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
        validate95.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate96(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate96.errors : vErrors.concat(validate96.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.context !== undefined) {
            const _errs2 = errors;
            if (
              !validate99(data.context, {
                instancePath: instancePath + '/context',
                parentData: data,
                parentDataProperty: 'context',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors = vErrors === null ? validate99.errors : vErrors.concat(validate99.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate95.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate95.errors = vErrors;
  return errors === 0;
}
validate95.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateInitialFormDataResult = validate102;
const schema105 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/initial-form-data/result.json',
  title: 'InitialFormDataResult',
  oneOf: [
    {
      type: 'object',
      properties: {
        value: { $ref: './value.json' },
        stop: {
          description:
            'If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.',
          type: ['boolean', 'null'],
        },
      },
      required: ['value'],
    },
    { $ref: '../../hook-reject-result/hook-reject-result.json' },
  ],
};
function validate102(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/initial-form-data/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate102.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.value === undefined && (missing0 = 'value')) {
        const err0 = {
          instancePath,
          schemaPath: '#/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.value !== undefined) {
          const _errs3 = errors;
          if (
            !validate96(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate96.errors : vErrors.concat(validate96.errors);
            errors = vErrors.length;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.stop !== undefined) {
            let data1 = data.stop;
            const _errs4 = errors;
            if (typeof data1 !== 'boolean' && data1 !== null) {
              const err1 = {
                instancePath: instancePath + '/stop',
                schemaPath: '#/oneOf/0/properties/stop/type',
                keyword: 'type',
                params: { type: schema105.oneOf[0].properties.stop.type },
                message: 'must be boolean,null',
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: '#/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
    var props0 = {};
    props0.value = true;
    props0.stop = true;
  }
  const _errs6 = errors;
  const _errs7 = errors;
  if (errors === _errs7) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (data.reject === undefined && (missing1 = 'reject')) {
        const err3 = {
          instancePath,
          schemaPath: '../../hook-reject-result/hook-reject-result.json/required',
          keyword: 'required',
          params: { missingProperty: missing1 },
          message: "must have required property '" + missing1 + "'",
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      } else {
        if (data.reject !== undefined) {
          if (typeof data.reject !== 'string') {
            const err4 = {
              instancePath: instancePath + '/reject',
              schemaPath: '../../hook-reject-result/hook-reject-result.json/properties/reject/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
        }
      }
    } else {
      const err5 = {
        instancePath,
        schemaPath: '../../hook-reject-result/hook-reject-result.json/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
  }
  var _valid0 = _errs6 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.reject = true;
      }
    }
  }
  if (!valid0) {
    const err6 = {
      instancePath,
      schemaPath: '#/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }
    errors++;
    validate102.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate102.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate102.evaluated = { dynamicProps: true, dynamicItems: false };
