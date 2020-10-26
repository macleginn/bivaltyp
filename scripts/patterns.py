import re

hyperlink_pattern = re.compile(r'(\[(.+?)\])?\{\{(.+?)\}\}')
predicate_link_pattern = re.compile(r'''
                                    \{\{
                                    \s*
                                    predicate:(?P<predicate>\S+)
                                    \s*
                                    \}\}''',
                                    re.X)
predicate_link_pattern_ru = re.compile(r'''
                                       \{\{
                                       \s*
                                       predicate_rus:(?P<predicate>\S+)
                                       \s*
                                       \}\}''',
                                       re.X)
language_link_pattern = re.compile(r'''
                                   \{\{
                                   \s*
                                   language:(?P<language>\S+)
                                   \s*
                                   \}\}''',
                                   re.X)
